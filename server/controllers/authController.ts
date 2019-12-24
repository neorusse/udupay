import { getUserByEmail, insertUser } from "../helpers/userQueryBuilder";

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

export async function Signup(
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

  // check if pod already exist
  if (userExist) {
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
