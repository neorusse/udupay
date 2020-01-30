import db from '../utils/dbConnect';
import { sql } from '@databases/pg';

// Write payment to db
export async function insertDuePayment(userId: string, dueId: any) {
  return await db.query(sql`
    INSERT INTO payments (user_id, dues_id) VALUES (${userId}, ${dueId})
  `);
}

// Read payment from db
export async function getDuePayment(userId: string) {
  return await db.query(sql`
    SELECT dues.name, dues.amount, payments.created_at FROM dues INNER JOIN payments ON dues.id = payments.dues_id WHERE payments.user_id = ${userId}
  `);
}
