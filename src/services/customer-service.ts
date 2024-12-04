import { ocCustomer } from "../model/class-based/oc_customer"

export const getCustomerAddressService = async ()=>{
    
    const customerDetails = await ocCustomer.findAll({
            attributes:['customer_id', 'email'],
            limit: 8,
            offset: 100
        })

    return { customerDetails };
}