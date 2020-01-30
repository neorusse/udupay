import { Router } from 'express';

import { auth } from '../middleware/auth';

import { insertPayment, getPayments } from '../controllers/paymentController';

const router = Router();

// write payments to db
router.post('/', insertPayment);

/** PROTECT ALL ROUTES AFTER THIS MIDDLEWARE */
router.use(auth);

// write payments to db
router.get('/', getPayments);

export default router;
