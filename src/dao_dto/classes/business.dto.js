export class BusinessDTO {
    constructor(business) {
        this.id = business._id;
        this.name = business.name;
        this.products = business.products;
    }
}
