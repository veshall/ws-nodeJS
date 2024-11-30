import { Request, Response } from "express";
import { getProducts } from "../services/product-service";
import apiResponse from "../utils/apiResponse";
// import { OK } from 'http-status';

const getOcProducts = async(req: Request , res: Response)=>{
    try {
        const products = await getProducts();
        return apiResponse.Success(
            res, 
            "products retrived successfully!",
            200,
            products
        )
    } catch (error) {
        console.log(error)
    }
}

export { getOcProducts };