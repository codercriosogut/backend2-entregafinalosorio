import OrderRepository from '../repositories/order.repository.js';
import Business from '../dao_dto/classes/business.dao.js';
import User from '../dao_dto/classes/user.dao.js';
import { transport } from '../app.js';
import { OrderDTO } from '../dao_dto/classes/order.dto.js';

const orderRepository = new OrderRepository(); // Instancia del repositorio
const usersService = new User();
const businessService = new Business();

export const getOrders = async (req, res) => {
    try {
        const orders = await orderRepository.getOrders();
        const ordersDTO = orders.map(order => new OrderDTO(order));
        res.json({ status: 'success', orders: ordersDTO });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las órdenes.' });
    }
};

export const getOrderById = async (req, res) => {
    const { oid } = req.params;
    try {
        const order = await orderRepository.getOrderById(oid);

        if (!order) {
            return res.status(404).send({ status: "error", error: "Order not found" });
        }

        const orderDTO = new OrderDTO(order);
        res.send({ status: "success", order: orderDTO });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 'error', message: 'Error al obtener la orden.' });
    }
};

export const createOrder = async (req, res) => {
    const { userId, businessId, productIds } = req.body;

    if (!userId || !businessId || !productIds) {
        return res.status(400).send({ status: "error", error: "Missing required fields" });
    }

    try {
        const resultBusiness = await businessService.getBusinessById(businessId);
        const resultUser = await usersService.getUserById(userId);

        if (!resultBusiness || !resultUser) {
            return res.status(400).send({ status: "error", error: "User or Business not found" });
        }

        const actualOrders = resultBusiness.products.filter(product => productIds.includes(product.id.toString()));

        if (!actualOrders.length) {
            return res.status(400).send({ status: "error", error: "No valid products found" });
        }

        let totalPrice = actualOrders.reduce((acc, product) => acc + product.price, 0);
        let orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);

        let order = {
            number: orderNumber,
            business: businessId,
            user: userId,
            products: actualOrders.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity // Asegúrate de incluir la cantidad si la necesitas
            })),
            totalPrice,
            status: "pending"
        };

        let orderResult = await orderRepository.createOrder(order);
        resultUser.orders.push(orderResult._id);
        await usersService.updateUser(userId, resultUser);

        const orderDTO = new OrderDTO(orderResult);
        res.send({ status: "success", order: orderDTO });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 'error', message: 'Error al crear la orden.' });
    }
};

export const resolveOrder = async (req, res) => {
    const { oid } = req.params;
    try {
        const order = await orderRepository.getOrderById(oid);

        if (!order) {
            return res.status(404).send({ status: "error", error: "Order not found" });
        }

        order.status = "resolved";
        await orderRepository.updateOrder(order._id, order);
        const orderDTO = new OrderDTO(order);
        res.send({ status: "success", order: orderDTO });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 'error', message: 'Error al resolver la orden.' });
    }
};


export const sendOrderEmail = async (req, res) => {
    const { oid } = req.params;
    const order = await orderRepository.getOrderById(oid);

    if (!order) {
        return res.status(404).send({ status: "error", error: "Order not found" });
    }

    try {
        const result = await transport.sendMail({
            from: "Cristian Osorio <cosoriogut@gmail.com>",
            to: "cosoriogut@gmail.com", // Cambia esto al correo del usuario si corresponde
            subject: "Detalles de la Orden",
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h1 style="background-color: #f8f9fa; padding: 10px; text-align: center;">Detalles de la Orden</h1>
                    <p>¡Gracias por tu pedido!</p>
                    <h2>Resumen de la Orden</h2>
                    <p><strong>Número de Orden:</strong> ${order.number}</p>
                    <p><strong>Estado:</strong> ${order.status}</p>
                    <p><strong>Total:</strong> $${order.totalPrice.toFixed(2)}</p>
                    <h3>Productos</h3>
                    <ul>
                        ${order.products.map(product => `
                            <li>
                                <strong>${product.name}</strong> - 
                                $${product.price.toFixed(2)} x ${product.quantity} unidad(es)
                            </li>
                        `).join('')}
                    </ul>
                    <hr>
                    <p style="text-align: center;">¡Gracias por comprar con nosotros!</p>
                </div>
            `,
            attachments: []
        });
        console.log('Correo enviado: ', result);
        res.send({ status: 'success', message: 'Email sent' });
    } catch (error) {
        console.error('Error al enviar el correo: ', error);
        res.status(500).send({ status: 'error', message: 'Failed to send email' });
    }
};
