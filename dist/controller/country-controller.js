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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOcCountries = void 0;
const country_service_1 = require("../services/country-service");
const apiResponse_1 = __importDefault(require("../utils/apiResponse"));
const getOcCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countries = yield (0, country_service_1.getocCountries)();
        return apiResponse_1.default.Success(res, "countries retrived successfully!", 200, countries);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getOcCountries = getOcCountries;
