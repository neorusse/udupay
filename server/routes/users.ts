import { Router } from "express";

import { validateSignup, validateLogin, validate } from "../helpers/validator";
import { signup, login } from "../controllers/authController";
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
  validateSignup(),
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
    const hashedPassword = await hashPassword(password);

    try {
      // Invoke Signup controller function
      const userDetails = await signup(
        first_name,
        last_name,
        email,
        hashedPassword,
        street,
        city,
        phone
      );

      const { status, message, success, payload } = userDetails;

      if (userDetails.message === "User already exist") {
        res.status(status).json({
          status,
          message,
          success,
          payload
        });

        return;
      }

      //Generate Token
      const token = await generateToken(
        payload.id,
        payload.email,
        payload.is_admin
      );

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

/**
 * User Signup Route
 * @param {object} req
 * @param {object} res
 * @returns {object} Pod object
 */
router.post("/login", validateLogin(), validate, async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    // Invoke Signup controller function
    const userDetails = await login(email, password);

    const { status, message, success, user } = userDetails;

    // Generate Token
    const token = await generateToken(
      user[0].id,
      user[0].email,
      user[0].is_admin
    );

    res
      .header("x-auth-token", token)
      .status(status)
      .json({
        status,
        message,
        success
      });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

    return;
  }
});

export default router;
