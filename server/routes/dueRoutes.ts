import { Router } from "express";

import { validateCreateDue, validate } from "../helpers/validator";

import { createADue, getAllDues } from "../controllers/dueController";

//import { adminAuth } from "../middleware/auth";

const router = Router();

/** PROTECT ALL ROUTES USING THIS MIDDLEWARE */
//router.use(adminAuth);

// create a due
router.post("/create", validateCreateDue(), validate, createADue);

// get all dues
router.get("/getAllDues", getAllDues);

export default router;
