import Business from '../dao_dto/classes/business.dao.js';
import mongoose from 'mongoose';
import { BusinessDTO } from '../dao_dto/classes/business.dto.js';

const businessService = new Business();

export const getBusiness = async (req, res) => {
    let result = await businessService.getBusiness();
    if (!result) return res.status(500).send({ status: "error", error: "Something went wrong" });
    const businessDTO = result.map(b => new BusinessDTO(b));
    res.send({ status: "success", result: businessDTO });
};

export const getBusinessById = async (req, res) => {
    const { bid } = req.params;
    let result = await businessService.getBusinessById(bid);
    if (!result) return res.status(500).send({ status: "error", error: "Something went wrong" });
    const businessDTO = new BusinessDTO(result);
    res.send({ status: "success", result: businessDTO });
};

export const createBusiness = async (req, res) => {
    const business = req.body;
    let result = await businessService.saveBusiness(business);
    if (!result) return res.status(500).send({ status: "error", error: "Something went wrong" });
    const businessDTO = new BusinessDTO(result);
    res.send({ status: "success", result: businessDTO });
};

export const addProduct = async (req, res) => {
    let product = req.body;
    product.id = new mongoose.Types.ObjectId();

    let business = await businessService.getBusinessById(req.params.bid);
    
    const productExists = business.products.some(p => p.id.toString() === product.id.toString());
    if (productExists) {
        return res.status(400).send({ status: "error", message: "Product already exists in business" });
    }

    business.products.push(product);
    
    await businessService.updateBusiness(business._id, business);
    res.send({ status: "success", result: "Product added successfully to business" });
};
