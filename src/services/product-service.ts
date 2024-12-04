import { ocProduct } from "../model/class-based/oc_products"

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