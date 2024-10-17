//cambios

import Order from '../dao/classes/order.dao.js'
import Business from '../dao/classes/business.dao.js'
import User from '../dao/classes/user.dao.js'

const usersService = new User()
const ordersService = new Order()
const businessService = new Business()

export const getOrders = async (req, res) => {
    let result = await ordersService.getOrders()
    res.send({ status: "success", result })
}

export const getOrderById = async (req, res) => {
    const { oid } = req.params
    let order = await ordersService.getOrderById(oid)
    res.send({ status: "success", result: order })
}


//new
export const createOrder = async (req, res) => {
    const { user, business, products } = req.body

     // Validar que el negocio y el usuario existan
    const resultUser = await usersService.getUserById(user)
    const resultBusiness = await businessService.getBusinessById(business)

    //new inset
    if (!resultBusiness || !resultUser) {
        return res.status(400).send({ status: "error", error: "User or Business not found" });
    }


    let actualOrders = resultBusiness.products.filter(product => products.includes(product.id.toString()));


    /* let actualOrders = resultBusiness.products.filter(product => products.includes(product.id)) */


    // Calcular el precio total de los productos
    let sum = actualOrders.reduce((acc, prev) => {
        acc += prev.price
        return acc
    }, 0)

    // Generar el número de la orden
    let orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1)


// Crear la orden
    let order = {
        number: orderNumber,
        business,
        user,
        products: actualOrders.map(product => product.id),
        totalPrice: sum,
        status: "pending"
    }



    let orderResult = await ordersService.createOrder(order)
    
    //new
    resultUser.orders.push(orderResult._id);
    //new
    
    await usersService.updateUser(user, resultUser)
    res.send({ status: "success", orderResult })
}

export const resolveOrder = async (req, res) => {
    const { resolve } = req.query
    let order = await ordersService.getOrderById(req.params.oid)
    order.status = resolve
    await ordersService.resolveOrder(order._id, order)
    res.send({ status: "success", result: "Order resolved" })

}