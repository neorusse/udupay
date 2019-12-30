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

// Insert due
export async function insertDue(name: string, amount: number) {
  return await db.query(sql`
    INSERT INTO dues (name, amount) VALUES (${name}, ${amount}) RETURNING id, name, amount;
  `);
}
