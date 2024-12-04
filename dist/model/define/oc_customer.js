"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'database',
});
const ocCustomer = sequelize.define("cCustomer", {
    customer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING(32),
        allowNull: false,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING(32),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(96),
        allowNull: false,
    },
    telephone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: "oc_customer",
    timestamps: false,
    indexes: [
        {
            name: 'PRIMARY',
            using: 'BTREE',
            unique: true,
            fields: [{ name: 'customer_id' }]
        }
    ]
});
