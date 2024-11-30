"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Success = (res, message, statusCode, result = {}) => {
    return res.status(statusCode).json({
        code: statusCode,
        message: message,
        data: result || {},
    });
};
exports.default = {
    Success
};
