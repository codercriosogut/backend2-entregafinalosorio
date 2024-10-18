import { Router } from "express";
import { getOrders, getOrderById, createOrder, resolveOrder } from '../controllers/orders.controller.js';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:oid', getOrderById);
router.put('/:oid', resolveOrder);  // Asegúrate de que la función resolveOrder está importada

export default router;
