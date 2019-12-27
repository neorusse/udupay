import db from "../utils/dbConnect";
import { sql } from "@databases/pg";

// Retrieve user by Id
export async function getUserById(id: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE id=${id}
  `);
}

// Retrieve user by email
export async function getUserByEmail(email: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE email=${email}
  `);
}

// Retrieve user by token
export async function getUserByToken(token: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE reset_password_token=${token}
  `);
}

// Insert user
export async function insertUser(
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  street: string,
  city: string,
  phone: string
) {
  return await db.query(sql`
    INSERT INTO users (first_name, last_name, email, password, street, city, phone)
    VALUES (${first_name}, ${last_name}, ${email}, ${password}, ${street}, ${city}, ${phone})
    RETURNING id, first_name, last_name, email, street, city, phone, img_url, is_admin;
  `);
}

/** TO SET TOKEN EXPIRY TIME IN DB */
// update user token
export async function updateUserToken(userId: string, token: string) {
  return await db.query(sql`
    UPDATE users
    SET reset_password_token=${token}
    WHERE id=${userId}
  `);
}

// update user password
export async function updateUserPassword(userId: string, password: string) {
  return await db.query(sql`
    UPDATE users
    SET password=${password}, reset_password_token=${null}, reset_password_expires_at=${null}
    WHERE id=${userId}
  `);
}

// delete user
export async function deleteUserById(userId: string) {
  return await db.query(sql`
    UPDATE users
    SET deleted_at=${new Date()}
    WHERE id=${userId}
  `);
}
