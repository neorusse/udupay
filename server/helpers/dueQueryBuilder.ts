import db from "../utils/dbConnect";
import { sql } from "@databases/pg";

// Retrieve user by Id
export async function getDueByName(name: string) {
  return await db.query(sql`SELECT * FROM dues WHERE name=${name}`);
}

// Insert due
export async function insertDue(name: string, amount: number) {
  return await db.query(sql`
    INSERT INTO dues (name, amount) VALUES (${name}, ${amount}) RETURNING id, name, amount;
  `);
}
