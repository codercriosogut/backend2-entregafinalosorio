export class ProductDTO {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.quantity = product.quantity;
    }
}

export class OrderDTO {
    constructor(order) {
        this.number = order.number;
        this.business = order.business;
        this.user = order.user;
        this.products = order.products.map(product => new ProductDTO(product));
        this.totalPrice = order.totalPrice;
        this.status = order.status;
    }
}
