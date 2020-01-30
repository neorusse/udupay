import { Router } from 'express';

import { insertPayment, getPayments } from '../controllers/paymentController';

const router = Router();

// write payments to db
router.post('/', insertPayment);

// write payments to db
router.get('/', getPayments);

export default router;
