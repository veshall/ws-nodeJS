import type { Sequelize } from "sequelize";


import { ocProduct as _ocProduct } from "./oc_products";
export {
  _ocProduct as ocProduct,
};


export function initModels(sequelize: Sequelize) {
    
    const ocProduct = _ocProduct.initModel(sequelize);
    
    return {ocProduct};
}
