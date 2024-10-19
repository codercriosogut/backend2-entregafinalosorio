import { Router } from 'express';
import { getOrders, getOrderById, createOrder, resolveOrder, sendOrderEmail } from '../controllers/orders.controller.js';

const router = Router();

router.get('/', getOrders); // Obtiene todas las órdenes
router.get('/:oid', getOrderById); // Obtiene una orden específica por ID
router.post('/', createOrder); // Crea una nueva orden
router.put('/:oid', resolveOrder); // Resuelve una orden existente

// Nueva ruta para enviar detalles de la orden por correo
router.get('/mail/order/:oid', sendOrderEmail); // Envía el correo con los detalles de la orden

export default router;
