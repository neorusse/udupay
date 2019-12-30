import { Router } from "express";

import { validateCreateDue, validate } from "../helpers/validator";

import {
  createADue,
  getAllDues,
  updateADue,
  deleteADue
} from "../controllers/dueController";

import { auth, adminAuth } from "../middleware/auth";

const router = Router();

/** PROTECT ALL ROUTES USING THIS MIDDLEWARE */
router.use(auth, adminAuth);

// create a due
router.post("/create", validateCreateDue(), validate, createADue);

// get all dues
router.get("/getAllDues", getAllDues);

// update a due
router.patch("/:dueId", updateADue);

// delete a due
router.delete("/:dueId", deleteADue);

export default router;
