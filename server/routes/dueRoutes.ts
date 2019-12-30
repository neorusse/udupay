import { Router } from "express";

import { validateCreateDue, validate } from "../helpers/validator";

import {
  createADue,
  getAllDues,
  updateADue
} from "../controllers/dueController";

//import { adminAuth } from "../middleware/auth";

const router = Router();

/** PROTECT ALL ROUTES USING THIS MIDDLEWARE */
//router.use(adminAuth);

// create a due
router.post("/create", validateCreateDue(), validate, createADue);

// get all dues
router.get("/getAllDues", getAllDues);

// get all dues
router.patch("/:dueId", updateADue);

export default router;
