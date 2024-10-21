import Business from '../models/business.model.js';

export default class BusinessDAO {
    async getBusiness() {
        return await Business.find({});
    }

    async getBusinessById(id) {
        return await Business.findById(id);
    }

    async saveBusiness(business) {
        const newBusiness = new Business(business);
        return await newBusiness.save();
    }

    async updateBusiness(id, business) {
        return await Business.findByIdAndUpdate(id, business, { new: true });
    }
}
