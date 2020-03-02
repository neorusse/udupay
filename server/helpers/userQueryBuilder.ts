import db from '../utils/dbConnect';
import { sql } from '@databases/pg';

// Retrieve all users
export async function fetchAllUsers(id: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE created_at IS NOT NULL AND NOT id=${id}
  `);
}

// Retrieve user by Id
export async function getUserById(id: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE id=${id} AND deleted_at IS NULL
  `);
}

// Retrieve user by email
export async function getUserByEmail(email: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE email=${email} AND deleted_at IS NULL
  `);
}

// Retrieve user by token
export async function getUserByToken(token: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE reset_password_token=${token} AND reset_password_expires_at > NOW()
  `);
}

// Retrieve a user searched for
export async function getSearchUser(id: string, value: string) {
  return await db.query(sql`
    SELECT * FROM users WHERE NOT id=${id} AND first_name LIKE ${'%' +
    value +
    '%'} OR last_name LIKE ${'%' + value + '%'}
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
  phone: string,
) {
  return await db.query(sql`
    INSERT INTO users (first_name, last_name, email, password, street, city, phone)
    VALUES (${first_name}, ${last_name}, ${email}, ${password}, ${street}, ${city}, ${phone})
    RETURNING id, first_name, last_name, email, street, city, phone, photo, is_admin, is_active;
  `);
}

// Insert Admin
export async function insertAdmin(
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  street: string,
  city: string,
  phone: string,
  is_admin: boolean,
) {
  return await db.query(sql`
    INSERT INTO users (first_name, last_name, email, password, street, city, phone, is_admin)
    VALUES (${first_name}, ${last_name}, ${email}, ${password}, ${street}, ${city}, ${phone}, ${is_admin})
    RETURNING id, first_name, last_name, email, street, city, phone, photo, is_admin, is_active;
  `);
}

// update user token
export async function updateUserToken(userId: string, token: string) {
  return await db.query(sql`
    UPDATE users
    SET reset_password_token=${token}, reset_password_expires_at = NOW() + INTERVAL '60 minute'
    WHERE id=${userId}
  `);
}

// update user password
export async function updateUserPassword(userId: string, password: string) {
  return await db.query(sql`
    UPDATE users
    SET password=${password}, reset_password_token=${null}, reset_password_expires_at=${null}, password_changed_at = NOW()
    WHERE id=${userId}
  `);
}

// update user photo
export async function updateUserPhoto(userId: string, photo: string) {
  return await db.query(sql`
    UPDATE users SET photo=${photo} WHERE id=${userId}
  `);
}

// delete user
export async function deleteUserById(userId: string) {
  return await db.query(sql`
    UPDATE users
    SET deleted_at=${new Date()}, is_active=${false}
    WHERE id=${userId}
  `);
}

// permanantly delete a user
export async function permDeleteUserById(userId: string) {
  return await db.query(
    sql`DELETE FROM users WHERE id=${userId} AND is_active=${false}`,
  );
}
