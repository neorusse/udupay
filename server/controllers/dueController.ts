import { Request, Response } from "express";

import {
  fetchAllDues,
  getDueByName,
  insertDue
} from "../helpers/dueQueryBuilder";

/**
 * Create a due
 * @param {object} req
 * @param {object} res
 * @returns {object} due success object
 */

export async function createADue(req: Request, res: Response) {
  const { name, amount } = req.body;

  // sanitize name
  const sanitizedName = name.toLowerCase();

  try {
    // retrieve due details
    const dueExist = await getDueByName(sanitizedName);

    // check if due is already created
    if (dueExist.length > 0) {
      res.status(409).json({
        status: 409,
        success: false,
        message: "Due already created"
      });

      return;
    }

    // Insert into due table
    const due = await insertDue(sanitizedName, amount);

    res.status(200).json({
      status: 200,
      success: true,
      message: "Due created successfully",
      due
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

    return;
  }
}

/**
 * Get all dues
 * @param {object} req
 * @param {object} res
 * @returns {object} All dues object
 */

export async function getAllDues(_req: Request, res: Response) {
  try {
    // Retrieve all dues
    const allDues = await fetchAllDues();

    res.status(200).json({
      status: 200,
      success: true,
      message: "All dues fetched successfully",
      allDues
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

    return;
  }
}
