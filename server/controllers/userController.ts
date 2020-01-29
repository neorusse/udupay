import { Response } from 'express';

import {
  getUserById,
  fetchAllUsers,
  getSearchUser,
  updateUserPassword,
  updateUserPhoto,
  deleteUserById,
  permDeleteUserById,
} from '../helpers/userQueryBuilder';

import { hashPassword, comparePassword } from '../helpers/appService';

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
      message: 'User with Id not found',
    };
  }

  return {
    status: 200,
    success: true,
    message: 'user successfully retrieved',
    user,
  };
}

/**
 * Update a user
 * @param {object} req
 * @param {object} res
 * @returns {object} Sucess object
 */
export async function updateMe(req: any, res: Response) {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  const user = await getUserById(req.user.userId);

  // check if user does not exist
  if (!(await comparePassword(user[0].password, currentPassword))) {
    res.status(400).json({
      status: 400,
      success: false,
      message: 'Invalid password',
    });

    return;
  }

  if (!newPassword || newPassword !== confirmNewPassword) {
    res.status(401).json({
      status: 401,
      success: false,
      message: 'Passwords do not match',
    });

    return;
  }

  // hashing the user password
  const hashedPassword = await hashPassword(newPassword);

  try {
    await updateUserPassword(req.user.userId, hashedPassword);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Password update successfully',
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });

    return;
  }
}

/**
 * Update a user - Photo Upload
 * @param {object} req
 * @param {object} res
 * @returns {object} Sucess object
 */
export async function uploadPhoto(req: any, res: Response) {
  if (!req.file) {
    res.status(404).json({
      status: 404,
      success: false,
      message: 'Please upload photo',
    });

    return;
  }

  try {
    await updateUserPhoto(req.user.userId, req.file.filename);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Photo upload successfully',
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });

    return;
  }
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
    message: 'user successfully deleted',
    user,
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
      message: 'All users fetched successfully',
      allUsers,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
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
        message: 'User does not exist',
      });

      return;
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: 'User fetched successfully',
      user,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
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
      message: 'User deleted successfully',
      user,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
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
    // sanitize name
    const sanitizedQueryName = req.query.q.toLowerCase();

    // get user
    const user = await getSearchUser(req.user.userId, sanitizedQueryName);

    // check if user already exist
    if (user.length === 0) {
      res.status(404).json({
        status: 404,
        success: false,
        message: 'User does not exist',
      });

      return;
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: 'User fetched successfully',
      user,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });

    return;
  }
}
