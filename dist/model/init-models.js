"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocProduct = void 0;
exports.initModels = initModels;
const oc_products_1 = require("./oc_products");
Object.defineProperty(exports, "ocProduct", { enumerable: true, get: function () { return oc_products_1.ocProduct; } });
function initModels(sequelize) {
    const ocProduct = oc_products_1.ocProduct.initModel(sequelize);
    return { ocProduct };
}
