import { getUserByEmail, insertUser } from "../helpers/userQueryBuilder";
import { comparePassword } from "../helpers/appService";

import crypto from "crypto";

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
  phone: string
) {
  // retrieve user details
  const userExist = await getUserByEmail(email);

  // check if user already exist
  if (userExist.length > 0) {
    return {
      status: 409,
      success: false,
      message: "User already exist"
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
    phone
  );

  return {
    status: 201,
    success: true,
    message: "user successfully created",
    payload
  };
}

/**
 * User Login
 * @param {string} email
 * @param {string} password
 * @returns {object} User object
 */

export async function login(email: string, password: string) {
  // retrieve user details
  const user = await getUserByEmail(email);

  // check if user does not exist
  if (!user.length || !(await comparePassword(user[0].password, password))) {
    return {
      status: 400,
      success: false,
      message: "Invalid email or password",
      user
    };
  }

  return {
    status: 200,
    success: true,
    message: "User login successful",
    user
  };
}

/**
 * User forget password
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */
export async function forgetPassword(req, res) {}
