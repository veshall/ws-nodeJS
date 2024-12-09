"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("../controller/customer-controller");
const auth_controller_1 = require("../controller/auth-controller");
const router = express_1.default.Router();
router.get("/api/customers", customer_controller_1.getCustomersData);
router.post("/api/register", auth_controller_1.registerCustomer);
exports.default = router;
