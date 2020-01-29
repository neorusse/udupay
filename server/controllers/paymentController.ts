import { Request, Response } from 'express';

import { insertDuePayment } from '../helpers/paymentQueryBuilder';

/**
 * Create a due
 * @param {object} req
 * @param {object} res
 * @returns {object} due success object
 */

export async function insertPayment(req: Request, res: Response) {
  const { user_id, dues_id } = req.body;

  try {
    // Insert into due table
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
