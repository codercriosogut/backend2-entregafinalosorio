import { Router } from 'express';
import { getOrders, getOrderById, createOrder, resolveOrder, sendOrderEmail } from '../controllers/orders.controller.js';

const router = Router();

router.get('/', getOrders);
router.get('/:oid', getOrderById);
router.post('/', createOrder);
router.put('/:oid', resolveOrder);
router.get('/mail/order/:oid', sendOrderEmail);

export default router;
