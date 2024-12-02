import { Request, Response } from "express";
import { getocCountries } from "../services/country-service";
import apiResponse from "../utils/apiResponse";

const getOcCountries= async(req:Request, res: Response)=>{

    console.log('hello')
    try {
        const countries = await getocCountries();
        return apiResponse.Success(
            res,
            "countries retrived successfully!",
            200,
            countries
        )
    } catch (error) {
        console.error(error)
    }
}

export { getOcCountries };