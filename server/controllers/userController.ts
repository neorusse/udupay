import { Response } from "express";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

import {
  getUserById,
  updateUserPassword,
  deleteUserById,
  fetchAllUsers,
  permDeleteUserById,
  getSearchUser
} from "../helpers/userQueryBuilder";
import { getDueIdByAmt } from "../helpers/dueQueryBuilder";
import { insertDuePayment } from "../helpers/paymentQueryBuilder";

import { hashPassword, comparePassword } from "../helpers/appService";

/**
 * Get a single user
 * @param {string} userId
 * @returns {object} User object
 */

export async function getMe(userId: string) {
  const user = await getUserById(userId);

  // check if user already exist
  if (!user) {
    return {
      status: 404,
      success: false,
      message: "User with Id not found"
    };
  }

  return {
    status: 200,
    success: true,
    message: "user successfully retrieved",
    user
  };
}

/**
 * update a user
 * @param {string} userId
 * @param {string} currentPassword
 * @param {string} newPassword
 * @param {string} confirmNewPassword
 * @returns {object} Success object
 */
export async function updateMe(
  userId: string,
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string
) {
  const user = await getUserById(userId);

  // check if user does not exist
  if (!(await comparePassword(user[0].password, currentPassword))) {
    return {
      status: 400,
      success: true,
      message: "Invalid password"
    };
  }

  if (!newPassword || newPassword !== confirmNewPassword) {
    return {
      status: 401,
      success: false,
      message: "Passwords do not match"
    };
  }

  // hashing the user password
  const hashedPassword = await hashPassword(newPassword);

  const updatedUser = await updateUserPassword(userId, hashedPassword);

  return {
    status: 200,
    success: true,
    message: "Password update successfully",
    updatedUser
  };
}

/**
 * Soft delete a single user
 * @param {string} userId
 * @returns {object} User object
 */

export async function deleteMe(userId: string) {
  const user = await deleteUserById(userId);

  return {
    status: 204,
    success: true,
    message: "user successfully deleted",
    user
  };
}

/**
 * Get all users
 * @param {object} req
 * @param {object} res
 * @returns {object} All users object
 */

export async function getAllUsers(req: any, res: Response) {
  try {
    // Retrieve all users
    const allUsers = await fetchAllUsers(req.user.userId);

    res.status(200).json({
      status: 200,
      success: true,
      message: "All users fetched successfully",
      allUsers
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

    return;
  }
}

/**
 * Get a single user
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */

export async function getAUser(req: any, res: Response) {
  try {
    // get user
    const user = await getUserById(req.params.userId);

    // check if user already exist
    if (user.length === 0) {
      res.status(404).json({
        status: 404,
        success: false,
        message: "User does not exist"
      });

      return;
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: "User fetched successfully",
      user
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

    return;
  }
}

/**
 * Permanently delete a user
 * @param {object} req
 * @param {object} res
 * @returns {object} a null user object
 */

export async function deleteAUser(req: any, res: Response) {
  try {
    // get user
    const user = await permDeleteUserById(req.params.userId);

    res.status(204).json({
      status: 204,
      success: true,
      message: "User deleted successfully",
      user
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

    return;
  }
}

/**
 * search for a user
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */

export async function searchUser(req: any, res: Response) {
  try {
    // get user
    const user = await getSearchUser(req.query.q);

    // check if user already exist
    if (user.length === 0) {
      res.status(404).json({
        status: 404,
        success: false,
        message: "User does not exist"
      });

      return;
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: "User fetched successfully",
      user
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

    return;
  }
}

/**
 * Handles due payment
 * @param {object} req
 * @param {object} res
 * @returns {object} Success object
 */

export async function duePayment(req: any, res: Response) {
  const dueId = getDueIdByAmt(req.body.amount);

  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  // Make payment charge to stripe
  stripe.charges.create(body, async (stripeErr: any, stripeRes: any) => {
    if (stripeErr) {
      res.status(500).json({ error: stripeErr });
    } else {
      // write payment to database
      await insertDuePayment(req.user.userId, dueId);

      res.status(200).json({
        status: 200,
        success: stripeRes,
        message: "Due Payment Successfully Made"
      });
    }
  });
}
