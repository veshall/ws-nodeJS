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
exports.sendOtp = exports.mail = void 0;
const oc_customer_1 = require("../model/class-based/oc_customer");
const nodemailer_1 = __importDefault(require("nodemailer"));
const lodash_1 = require("lodash");
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'no-reply@woodenstreet.com',
        pass: 'W00d@udr',
    },
});
const mail = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let resp = {};
        if (!(0, lodash_1.isEmpty)(body)) {
            resp = transporter.sendMail(body, (err, info) => {
                if (err)
                    return err;
                return info;
            });
            return resp;
        }
    }
    catch (error) {
        return error.message;
    }
});
exports.mail = mail;
const sendOtp = (user) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let cupDate;
    const staticotp = Math.floor(100000 + Math.random() * 900000);
    try {
        cupDate = yield oc_customer_1.ocCustomer.update({ live_id: String(staticotp) }, { where: {
                email: (_a = user.body) === null || _a === void 0 ? void 0 : _a.email
            }
        })
            .then((data) => {
            return data[0];
        });
        if (cupDate) {
            const getCustomer = yield oc_customer_1.ocCustomer.findOne({
                attributes: ['firstname', 'email'],
                where: {
                    email: (_b = user.body) === null || _b === void 0 ? void 0 : _b.email
                }
            });
            const mailOptions = {
                to: getCustomer === null || getCustomer === void 0 ? void 0 : getCustomer.email,
                subject: 'Welcome to Our World of Furniture...bonded with love',
                html: 'Use ' + staticotp + 'as your verification code on WoodenStreet. The OTP expires within 1 mins. Please do not share the OTP with anyone. Team WoodenStreet',
            };
            const info = yield transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                    console.log(err);
                else
                    console.log(info);
            });
            return (cupDate = 1);
        }
        else {
            return (cupDate = 0);
        }
    }
    catch (error) {
        console.log('Send OTP error common service - ', error);
        return (cupDate = 0);
    }
});
exports.sendOtp = sendOtp;
