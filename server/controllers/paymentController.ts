import { Request, Response } from 'express';

import {
  insertDuePayment,
  getDuePayment,
} from '../helpers/paymentQueryBuilder';

/**
 * Write a due payment to db
 * @param {object} req
 * @param {object} res
 * @returns {object} due success object
 */

export async function insertPayment(req: Request, res: Response) {
  const { user_id, dues_id } = req.body;

  try {
    // Write into to table
    const due = await insertDuePayment(user_id, dues_id);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Payment successfully',
      due,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });

    return;
  }
}

/**
 * retrieve a due payment from db
 * @param {object} req
 * @param {object} res
 * @returns {object} due success object
 */

export async function getPayments(req: any, res: Response) {
  try {
    // Read from payment table
    const due = await getDuePayment(req.user.userId);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Payment Retrieval successfull',
      due,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });

    return;
  }
}
