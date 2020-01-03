import db from "../utils/dbConnect";
import { sql } from "@databases/pg";

// Write payment to db
export async function insertDuePayment(userId: string, dueId: any) {
  return await db.query(sql`
    INSERT INTO payments (user_id, dues_id) VALUES (${userId}, ${dueId})
  `);
}
