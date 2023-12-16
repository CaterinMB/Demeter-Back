import { Sequelize } from 'sequelize';
import { DB_Host, DB_Port, DB_User, DB_Password, DB_Name } from '../config.js'

export const sequelize = new Sequelize(
  'demeter',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);