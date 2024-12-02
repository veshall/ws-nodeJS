import {  DataTypes, Sequelize } from "sequelize";

export interface ocCountries {
    country_id: number,
    name: string,
    iso_code: string, 
    status: boolean
}

const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'root', 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME || 'database', 
    })

export const ocCountry= sequelize.define(
    "ocCountry",
    {
        country_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(128),
            allowNull: false
          },
          iso_code_2: {
            type: DataTypes.STRING(2),
            allowNull: false
          },
          iso_code_3: {
            type: DataTypes.STRING(3),
            allowNull: false
          },
          address_format: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          postcode_required: {
            type: DataTypes.BOOLEAN,
            allowNull: false
          },
          status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
          }
    },{
        tableName: 'oc_country',
        timestamps: false,
        indexes:[
            {  name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "country_id" },
            ]}
        ]
    }
) 