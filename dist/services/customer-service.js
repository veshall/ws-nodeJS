"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerAddressService = void 0;
const oc_customer_1 = require("../model/class-based/oc_customer");
const getCustomerAddressService = () => __awaiter(void 0, void 0, void 0, function* () {
    const customerDetails = yield oc_customer_1.ocCustomer.findAll({
        attributes: ['customer_id', 'email'],
        limit: 8,
        offset: 100
    });
    return { customerDetails };
});
exports.getCustomerAddressService = getCustomerAddressService;
