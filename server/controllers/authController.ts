import { Request, Response } from 'express';
import crypto from 'crypto';

import {
  getUserByEmail,
  getUserByToken,
  getUserById,
  insertUser,
  updateUserToken,
  updateUserPassword,
} from '../helpers/userQueryBuilder';

import {
  hashPassword,
  comparePassword,
  generateToken,
} from '../helpers/appService';

import sendForgetPasswordMail from '../utils/sendForgetPasswordMail';

/**
 * User Signup
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} password
 * @param {string} street
 * @param {string} city
 * @param {string} phone
 * @returns {object} User object
 */

export async function signup(
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  street: string,
  city: string,
  phone: string,
) {
  // retrieve user details
  const userExist = await getUserByEmail(email);

  // check if user already exist
  if (userExist.length > 0) {
    return {
      status: 409,
      success: false,
      message: 'User already exist',
    };
  }

  // write to users table
  const [payload] = await insertUser(
    firstname,
    lastname,
    email,
    password,
    street,
    city,
    phone,
  );

  return {
    status: 201,
    success: true,
    message: 'user successfully created',
    payload,
  };
}

/**
 * User Login
 * @param {string} email
 * @param {string} password
 * @returns {object} User object
 */

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  // retrieve user details
  const user = await getUserByEmail(email);

  // check if user does not exist
  if (!user[0] || !(await comparePassword(user[0].password, password))) {
    res.status(401).json({
      status: 401,
      success: false,
      message: 'Invalid Email or Password',
    });

    return;
  }

  try {
    // Generate Token
    const token = await generateToken(
      user[0].id,
      user[0].email,
      user[0].is_admin,
    );

    res.status(200).json({
      token,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });

    return;
  }
}

/**
 * User forget password
 * @param {object} req
 * @param {object} res
 * @returns {object} Success object
 */
export async function forgetPassword(req: Request, res: Response) {
  if (req.body.email === '') {
    res.status(400).send('email is required');
  }

  // retrieve user details
  const user = await getUserByEmail(req.body.email);

  // check if user already exist
  if (user.length < 1) {
    res.status(403).json({
      status: 403,
      success: false,
      message: 'invalid email',
    });

    return;
  }

  // generate token
  const token = crypto.randomBytes(20).toString('hex');

  // update user
  await updateUserToken(user[0].id, token);

  try {
    // send forget password email
    await sendForgetPasswordMail(user[0].email, token);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Password recovery email sent',
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
 * User reset password
 * @param {object} req
 * @param {object} res
 * @returns {object} Success object
 */
export async function resetPassword(req: Request, res: Response) {
  // get user by token
  const user = await getUserByToken(req.params.token);

  // check if user already exist
  if (user.length < 1) {
    res.status(403).json({
      status: 403,
      success: false,
      message: 'Invalid/expired Token',
    });

    return;
  }

  const { password, confirmPassword } = req.body;

  if (!password || password !== confirmPassword) {
    res.status(401).json({
      status: 401,
      success: false,
      message: 'Passwords do not match',
    });

    return;
  }

  // hashing the user password
  const hashedPassword = await hashPassword(password);

  try {
    // send email
    await updateUserPassword(user[0].id, hashedPassword);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Password reset successfully',
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
 * User update password
 * @param {object} req
 * @param {object} res
 * @returns {object} Success object
 */
export async function updatePassword(req: any, res: Response) {
  // get user by token
  const user = await getUserById(req.user.userId);

  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  // check if user does not exist
  if (!(await comparePassword(user[0].password, currentPassword))) {
    res.status(400).json({
      status: 400,
      success: true,
      message: 'Invalid password',
    });

    return;
  }

  if (newPassword !== confirmNewPassword) {
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
    // send email
    await updateUserPassword(user[0].id, hashedPassword);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Password update successfull',
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
