"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controller/product-controller");
const country_controller_1 = require("../controller/country-controller");
const router = express_1.default.Router();
router.get("/api/products", product_controller_1.getOcProducts);
router.get("/api/countries", country_controller_1.getOcCountries);
exports.default = router;
