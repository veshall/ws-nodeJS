import { ocProduct } from "../model/oc_products"

export const getProducts = async()=>{
    const allproductsData = await ocProduct.findAll({
        attributes:[
            'product_id',
            'price'
        ],
        limit: 20
    })

    return {allproductsData};
}