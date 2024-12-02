import type { Sequelize } from "sequelize";


import { ocProduct as _ocProduct } from "./oc_products";
import { ocCountry as _ocCountry} from "./class-based/oc_country";
export {
  _ocProduct as ocProduct,
  _ocCountry as oc_country
};


export function initModels(sequelize: Sequelize) {
    
    const ocProduct = _ocProduct.initModel(sequelize);
    const ocCountry = _ocCountry.initModel(sequelize)
    
    return {ocProduct, ocCountry};
}
