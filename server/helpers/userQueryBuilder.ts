import db from "../utils/dbConnect";
import { sql } from "@databases/pg";

// Retrieve user by email
export async function getUserByEmail(email: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE email=${email}
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
// update user
export async function updateUser(userId: string, token: string) {
  return await db.query(sql`
    UPDATE users
    SET reset_password_token=${token}
    WHERE id=${userId}
  `);
}
