"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocProduct = void 0;
const sequelize_1 = require("sequelize");
class ocProduct extends sequelize_1.Model {
    static initModel(sequelize) {
        return ocProduct.init({
            product_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            model: {
                type: sequelize_1.DataTypes.STRING(64),
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'oc_product',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'product_id' }],
                },
                {
                    name: 'status',
                    using: 'BTREE',
                    fields: [{ name: 'status' }],
                },
                {
                    name: 'url',
                    using: 'BTREE',
                    fields: [{ name: 'url' }],
                },
                {
                    name: 'brand',
                    using: 'BTREE',
                    fields: [{ name: 'brand' }],
                },
            ],
        });
    }
}
exports.ocProduct = ocProduct;
