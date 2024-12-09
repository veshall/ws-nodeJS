import { Request, Response } from "express"
import { getCustomerAddressService } from "../services/customer-service"
import apiResponse from "../utils/apiResponse"



const getCustomersData = async(req: Request,res: Response)=>{
       try {
        const customers = await getCustomerAddressService()
        return apiResponse.Success(
            res, 
            "products retrived successfully!",
            200,
            customers
        )
       } catch (error) {
        console.log(error)
       } 
}

export { getCustomersData };                                