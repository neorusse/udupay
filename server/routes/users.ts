import { Router } from "express";

import { userValidationRules, validate } from "../helpers/validator";
import { Signup } from "../controllers/authController";
import { hashPassword, generateToken } from "../helpers/appService";

const router = Router();

/**
 * User Signup Route
 * @param {object} req
 * @param {object} res
 * @returns {object} Pod object
 */
router.post(
  "/signup",
  userValidationRules(),
  validate,
  async (req: any, res: any) => {
    const {
      first_name,
      last_name,
      email,
      password,
      street,
      city,
      phone
    } = req.body;

    // Hash password
    const hashedPassword = hashPassword(password);

    try {
      // Invoke Signup controller function
      const userDetails = await Signup(
        first_name,
        last_name,
        email,
        hashedPassword,
        street,
        city,
        phone
      );

      const { status, message, success, payload } = userDetails;

      // Generate Token
      const token = generateToken(payload.id, payload.email, payload.is_admin);

      res
        .header("x-auth-token", token)
        .status(status)
        .json({
          status,
          message,
          success,
          payload
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
);

export default router;
