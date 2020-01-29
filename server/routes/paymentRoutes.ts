import { Router } from 'express';

import { insertPayment } from '../controllers/paymentController';

const router = Router();

// search for a user
router.post('/', insertPayment);

export default router;
