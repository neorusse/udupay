import { Request, Response, Router } from 'express';

import { validateSignup, validateLogin, validate } from '../helpers/validator';
import {
  signup,
  login,
  forgetPassword,
  resetPassword,
  updatePassword,
} from '../controllers/authController';
import {
  getMe,
  updateMe,
  deleteMe,
  getAllUsers,
  getAUser,
  deleteAUser,
  searchUser,
  uploadPhoto,
} from '../controllers/userController';
import { uploadUserPhoto, resizeUserPhoto } from '../middleware/photoUpload';

import { hashPassword, generateToken } from '../helpers/appService';
import { auth, adminAuth } from '../middleware/auth';
import sendSignUpMail from '../utils/sendSignUpMail';

const router = Router();

/**
 * User Signup Route
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */
router.post(
  '/signup',
  validateSignup(),
  validate,
  async (req: Request, res: Response) => {
    const {
      first_name,
      last_name,
      email,
      password,
      street,
      city,
      phone,
    } = req.body;

    // sanitize first name
    const sanitizedFirstname = first_name.toLowerCase();

    // sanitize last name
    const sanitizedLastname = last_name.toLowerCase();

    // Hash password
    const hashedPassword = await hashPassword(password);

    try {
      // Invoke Signup controller function
      const userDetails = await signup(
        sanitizedFirstname,
        sanitizedLastname,
        email,
        hashedPassword,
        street,
        city,
        phone,
      );

      const { status, message, success, payload } = userDetails;

      if (userDetails.message === 'User already exist') {
        res.status(status).json({
          status,
          message,
          success,
          payload,
        });

        return;
      }

      //Generate Token
      const token = await generateToken(
        payload.id,
        payload.email,
        payload.is_admin,
      );

      // send welcome email
      await sendSignUpMail(payload.email);

      res.status(status).json({
        token,
      });

      return;
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });

      return;
    }
  },
);

/**
 * User Login Route
 * @param {object} req
 * @param {object} res
 * @returns {object} Pod object
 */

// login route
router.post('/login', validateLogin(), validate, login);

// forget password route
router.post('/forgetPassword', forgetPassword);

// reset password route
router.patch('/resetPassword/:token', resetPassword);

/** PROTECT ALL ROUTES AFTER THIS MIDDLEWARE */
router.use(auth);

// update password route
router.patch('/updatePassword', updatePassword);

/** LOGGED-IN USER ROUTE */

// get details of a logged-in user
router.get('/me', async (req: any, res: Response) => {
  try {
    const userDetails = await getMe(req.user.userId);

    const { status, success, message, user } = userDetails;

    res.status(status).json({
      status,
      message,
      success,
      user,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });

    return;
  }
});

// update password of a logged-in user
router.patch('/updateMe', updateMe);

// upload profile photo of a logged-in user
router.patch('/uploadPhoto', uploadUserPhoto, resizeUserPhoto, uploadPhoto);

// update password and profile photo of a logged-in user
router.delete('/deleteMe', async (req: any, res: Response) => {
  try {
    const userDetails = await deleteMe(req.user.userId);

    const { status, success, message, user } = userDetails;

    res.status(status).json({
      status,
      message,
      success,
      user,
    });

    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });

    return;
  }
});

/** PROTECT ALL ROUTES AFTER THIS MIDDLEWARE */
router.use(adminAuth);

// fetch all users
router.get('/getAllUsers', getAllUsers);

// search for a user
router.get('/search', searchUser);

// fetch a single user
router.get('/:userId', getAUser);

// delete a single user
router.delete('/:userId', deleteAUser);

export default router;
