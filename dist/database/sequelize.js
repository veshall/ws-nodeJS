"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'database', process.env.DB_USERNAME || 'root', process.env.DB_PASSWORD, {
    dialect: "mysql",
    host: process.env.DB_HOST || 'localhost',
});
try {
    exports.sequelize.authenticate();
    console.log('DB >>> Connection has been established successfully.');
}
catch (error) {
    console.error('DB ERROR >>> Unable to connect to the database:', error);
}
