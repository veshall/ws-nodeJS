import type { Sequelize } from "sequelize";


import { ocProduct as _ocProduct } from "./class-based/oc_products";
import { ocCountry as _ocCountry} from "./class-based/oc_country";
import { ocCustomer as _ocCustomer } from "./class-based/oc_customer";
export {
  _ocProduct as ocProduct,
  _ocCountry as oc_country,
  _ocCustomer as oc_customer
};


export function initModels(sequelize: Sequelize) {
    
    const ocProduct = _ocProduct.initModel(sequelize);
    const ocCountry = _ocCountry.initModel(sequelize)
    const ocCustomer = _ocCustomer.initModel(sequelize)
    
    return {ocProduct, ocCountry, ocCustomer};
}
