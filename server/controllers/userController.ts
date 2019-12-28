import { Request, Response } from "express";

import {
  getUserById,
  updateUserPassword,
  deleteUserById,
  fetchAllUsers
} from "../helpers/userQueryBuilder";
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
 * Get a single user
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
 * delete a single user
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
 * Get a single user
 * @returns {object} User object
 */

export async function getAllUsers(_req: Request, res: Response) {
  try {
    // send email
    const allUsers = await fetchAllUsers();

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
