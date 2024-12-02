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
exports.getocCountries = void 0;
const oc_country_1 = require("../model/define/oc_country");
const getocCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const allCountries = yield oc_country_1.ocCountry.findAll({
        attributes: { exclude: ['address_format'] },
        limit: 2,
        offset: 10
    });
    return { allCountries };
});
exports.getocCountries = getocCountries;
