"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oc_country = exports.ocProduct = void 0;
exports.initModels = initModels;
const oc_products_1 = require("./oc_products");
Object.defineProperty(exports, "ocProduct", { enumerable: true, get: function () { return oc_products_1.ocProduct; } });
const oc_country_1 = require("./class-based/oc_country");
Object.defineProperty(exports, "oc_country", { enumerable: true, get: function () { return oc_country_1.ocCountry; } });
function initModels(sequelize) {
    const ocProduct = oc_products_1.ocProduct.initModel(sequelize);
    const ocCountry = oc_country_1.ocCountry.initModel(sequelize);
    return { ocProduct, ocCountry };
}
