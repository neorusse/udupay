import db from "../utils/dbConnect";
import { sql } from "@databases/pg";

// Retrieve all dues
export async function fetchAllDues() {
  return await db.query(sql`SELECT * FROM dues`);
}

// Retrieve a due by name
export async function getDueByName(name: string) {
  return await db.query(sql`SELECT * FROM dues WHERE name=${name}`);
}

// Retrieve a due by name
export async function getDueById(id: string) {
  return await db.query(sql`SELECT * FROM dues WHERE id=${id}`);
}

// Insert due
export async function insertDue(name: string, amount: number) {
  return await db.query(sql`
    INSERT INTO dues (name, amount) VALUES (${name}, ${amount}) RETURNING id, name, amount;
  `);
}

// update a due
export async function updateDue(dueId: string, name: string, amount: string) {
  return await db.query(
    sql`UPDATE dues SET name=${name}, amount=${amount} WHERE id=${dueId} RETURNING id, name, amount`
  );
}
