import { getUserById } from "../helpers/userQueryBuilder";

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
