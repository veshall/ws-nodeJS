import { DataTypes, Model, Optional, Sequelize, InferAttributes, InferCreationAttributes } from "sequelize";

export interface ocCustomerAttributes {
    customer_id: number,
    firstname: string,
    lastname?: string,
    email: string,
    telephone?: string,
    password: string,
    wishlist?: string
}

type ocCustomerOptionalAttributes = 'customer_id' | 'wishlist';

export type ocCustomerCreationAttributes = Optional<ocCustomerAttributes, ocCustomerOptionalAttributes>

export class ocCustomer extends Model<ocCustomerAttributes, ocCustomerCreationAttributes> implements ocCustomerAttributes {
    customer_id!: number;
    firstname!: string;
    lastname?: string;
    email!: string;
    telephone?: string;
    password!: string;
    wishlist?: string

    static initModel(sequelize: Sequelize): typeof ocCustomer{
        return ocCustomer.init({
            customer_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            firstname:{
                type: DataTypes.STRING(32),
                allowNull: false,
            },
            lastname:{
                type: DataTypes.STRING(32),
                allowNull: true,
            },
            email:{
                type: DataTypes.STRING(96),
                allowNull: false,
            },
            telephone:{
                type: DataTypes.STRING(32),
                allowNull: true
            },
            password:{
                type: DataTypes.STRING(128),
                allowNull: false
            },
            wishlist:{
                type: DataTypes.TEXT,
                allowNull: true
            }
        },
        {   
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
            
        }
    )
    }
}
