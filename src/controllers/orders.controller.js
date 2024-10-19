import Order from '../dao/classes/order.dao.js';
import Business from '../dao/classes/business.dao.js';
import User from '../dao/classes/user.dao.js';
import { transport } from '../app.js'; // Importa el transportador

const usersService = new User();
const ordersService = new Order();
const businessService = new Business();

export const getOrders = async (req, res) => {
    const orders = await ordersService.getOrders();
    res.send({ status: "success", orders });
};

export const getOrderById = async (req, res) => {
    const { oid } = req.params;
    const order = await ordersService.getOrderById(oid);

    if (!order) {
        return res.status(404).send({ status: "error", error: "Order not found" });
    }

    res.send({ status: "success", order });
};

export const createOrder = async (req, res) => {
    const { userId, businessId, productIds } = req.body;

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
            price: product.price
        })),
        totalPrice,
        status: "pending"
    };

    let orderResult = await ordersService.createOrder(order);
    resultUser.orders.push(orderResult._id);
    await usersService.updateUser(userId, resultUser);
    res.send({ status: "success", orderResult });
};

export const resolveOrder = async (req, res) => {
    const { oid } = req.params;
    const order = await ordersService.getOrderById(oid);

    if (!order) {
        return res.status(404).send({ status: "error", error: "Order not found" });
    }

    order.status = "resolved";
    await ordersService.updateOrder(order._id, order);
    res.send({ status: "success", order });
};

// Nueva función para enviar correo
export const sendOrderEmail = async (req, res) => {
    const { oid } = req.params; // Obtener el ID de la orden de los parámetros de la URL
    const order = await ordersService.getOrderById(oid);

    if (!order) {
        return res.status(404).send({ status: "error", error: "Order not found" });
    }

    try {
        const result = await transport.sendMail({
            from: "Cristian Osorio <cosoriogut@gmail.com>",
            to: "cosoriogut@gmail.com",
            subject: "Detalles de la Orden",
            html: `
                <div>
                    <h1>Detalles de la Orden</h1>
                    <p>Gracias por tu pedido!</p>
                    <p>Detalles de la Orden:</p>
                    <p>Número: ${order.number}</p>
                    <p>Estado: ${order.status}</p>
                    <p>Total: ${order.totalPrice}</p>
                    <p>Productos: ${order.products.map(product => `<div>${product.name} - $${product.price}</div>`).join('')}</p>
                </div>
            `,
            attachments: [] // Aquí puedes agregar archivos si lo necesitas
        });

        console.log('Correo enviado: ', result.messageId);
        res.status(200).send('Correo enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo: ', error);
        res.status(500).send('Error al enviar el correo');
    }
};
