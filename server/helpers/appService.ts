import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { JWT_PRIVATE_KEY } from "../config";

/**
 * Hash Password Method
 * @param {string} password
 * @returns {string} returns hashed password
 */
export async function hashPassword(password: string) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7));
}

/**
 * comparePassword
 * @param {string} hashPassword
 * @param {string} password
 * @returns {Boolean} return True or False
 */
export async function comparePassword(hashPassword: string, password: string) {
  return bcrypt.compareSync(password, hashPassword);
}

/**
 * Generate Token
 * @param {string} id
 * @returns {string} token
 */

export async function generateToken(
  id: string,
  email: string,
  isAdmin: string
) {
  const token = jwt.sign(
    {
      userId: id,
      email: email,
      isAdmin: isAdmin
    },
    JWT_PRIVATE_KEY,
    { expiresIn: "7h" }
  );
  return token;
}
