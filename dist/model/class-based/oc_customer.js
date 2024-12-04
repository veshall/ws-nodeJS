"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocCustomer = void 0;
const sequelize_1 = require("sequelize");
class ocCustomer extends sequelize_1.Model {
    static initModel(sequelize) {
        return ocCustomer.init({
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
                allowNull: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING(96),
                allowNull: false,
            },
            telephone: {
                type: sequelize_1.DataTypes.STRING(32),
                allowNull: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            },
            wishlist: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'oc_customer',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'customer_id' }],
                },
            ],
        });
    }
}
exports.ocCustomer = ocCustomer;
