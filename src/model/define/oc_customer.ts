import { DataTypes, Sequelize } from "sequelize";



const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'root', 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME || 'database', 
    })

const ocCustomer = sequelize.define(
    "cCustomer",
    {
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
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(96),
        allowNull: false,
    },
    telephone:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(128),
        allowNull: false
    }
    },
    {
        tableName: "oc_customer",
        timestamps:false,
        indexes:[
            {
                name: 'PRIMARY',
                using: 'BTREE',
                unique: true,
                fields: [{name: 'customer_id'}]
            }
        ]
    }
)

