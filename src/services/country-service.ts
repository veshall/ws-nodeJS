import { ocCountry } from "../model/define/oc_country"


export const getocCountries = async()=>{
    const allCountries = await ocCountry.findAll({
   
        attributes:{exclude: ['address_format']},
        limit: 2,
        offset: 10
    })

    return { allCountries };
} 