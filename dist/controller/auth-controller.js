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
exports.registerCustomer = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const oc_customer_1 = require("../model/class-based/oc_customer");
const apiResponse_1 = __importDefault(require("../utils/apiResponse"));
const send_otp_1 = require("../utils/send-otp");
const registerCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.firstname) || !((_b = req.body) === null || _b === void 0 ? void 0 : _b.lastname) || !((_c = req.body) === null || _c === void 0 ? void 0 : _c.password) || !((_d = req.body) === null || _d === void 0 ? void 0 : _d.email)) {
        return res.status(400).send({
            message: "Details are incomplete!"
        });
    }
    const userEmailexists = yield userCheckByEmail((_e = req.body) === null || _e === void 0 ? void 0 : _e.email);
    if (userEmailexists) {
        return res.status(400).send({
            message: "This email is already exists."
        });
    }
    const salt = crypto_1.default.randomBytes(4).toString('hex');
    const hashPass = yield bcrypt_1.default.hash((_f = req.body) === null || _f === void 0 ? void 0 : _f.password, 10);
    const userDetails = {
        firstname: (_g = req.body) === null || _g === void 0 ? void 0 : _g.firstname,
        lastname: (_h = req.body) === null || _h === void 0 ? void 0 : _h.lastname,
        telephone: (_k = (_j = req.body) === null || _j === void 0 ? void 0 : _j.telephone) !== null && _k !== void 0 ? _k : "000",
        status: 1,
        approved: 1,
        email: (_l = req.body) === null || _l === void 0 ? void 0 : _l.email.toLowerCase(),
        password: hashPass,
        salt: salt,
        cart: '',
        wishlist: '',
    };
    try {
        let token = {};
        const user = yield oc_customer_1.ocCustomer.create(userDetails);
        console.log(user);
        const otpResponse = yield (0, send_otp_1.sendOtp)(user);
        if (otpResponse === 1) {
            token = jsonwebtoken_1.default.sign({
                _id: user.live_id,
                customer_id: user.customer_id,
                name: user.firstname,
                email: user.email,
            }, process.env.JWT_SECRET || 'secret');
        }
        if (token) {
            const mailOptions = {
                from: 'The Woodenstreet Furnitures Pvt. Ltd.',
                to: user === null || user === void 0 ? void 0 : user.email,
                subject: 'The Woodenstreet Furnitures Pvt. Ltd. - Thank you for registering',
                html: 'thanks for regiteration!',
            };
            yield (0, send_otp_1.mail)(mailOptions);
        }
        return apiResponse_1.default.Success(res, 'User registered successfully!', 200, user);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.registerCustomer = registerCustomer;
const userCheckByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield oc_customer_1.ocCustomer.findOne({
        where: {
            email: email
        }
    });
    return user;
});
