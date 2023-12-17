import { Sequelize } from 'sequelize';
import { DB_Host, DB_Port, DB_User, DB_Password, DB_Name } from '../config.js'

export const sequelize = new Sequelize(
  {
    database: DB_Name,
    user: DB_User,
    password: DB_Password,
    host: DB_Host,
    dialect: 'mysql',
    port: DB_Port
  }
);