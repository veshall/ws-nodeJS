"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocCountry = void 0;
const sequelize_1 = require("sequelize");
class ocCountry extends sequelize_1.Model {
    static initModel(sequelize) {
        return ocCountry.init({
            country_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            },
            iso_code_2: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: false
            },
            iso_code_3: {
                type: sequelize_1.DataTypes.STRING(3),
                allowNull: false
            },
            address_format: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            postcode_required: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            status: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 1
            }
        }, {
            sequelize,
            tableName: 'oc_country',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "country_id" },
                    ]
                },
            ]
        });
    }
}
exports.ocCountry = ocCountry;
