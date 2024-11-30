import {Sequelize} from 'sequelize';

import { config as dotenvConfig } from 'dotenv';

dotenvConfig(); 

export const sequelize = new Sequelize( 
    process.env.DB_NAME || 'database', 
    process.env.DB_USERNAME || 'root', 
    process.env.DB_PASSWORD, 
    {
    dialect: "mysql",
    host: process.env.DB_HOST || 'localhost',
    }
);

    try {
        sequelize.authenticate();
        console.log('DB >>> Connection has been established successfully.');
    } 
    catch (error) {
        console.error('DB ERROR >>> Unable to connect to the database:', error);
    }