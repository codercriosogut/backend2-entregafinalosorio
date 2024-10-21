export class OrderDTO {
    constructor(order) {
        this.id = order._id;
        this.number = order.number;
        this.business = order.business.name; // Se asume que business tiene un campo "name"
        this.user = order.user.name; // Se asume que user tiene un campo "name"
        this.products = order.products.map(product => ({
            name: product.name,
            price: product.price,
            quantity: product.quantity
        }));
        this.totalPrice = order.totalPrice;
        this.status = order.status;
    }
}
