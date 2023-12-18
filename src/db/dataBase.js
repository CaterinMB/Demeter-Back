import { Sequelize } from 'sequelize';

const dbConfig = {
  host: process.env.DB_Host || 'localhost',
  port: process.env.DB_Port || '3306',
  username: process.env.DB_User || 'root',
  password: process.env.DB_Password || '',
  database: process.env.DB_Name || 'demeter',
  dialect: 'mysql' 
}

export const sequelize = new Sequelize(
  dbConfig
);

// export const sequelize = new Sequelize(
//   'demeter',
//   'root',
//   '',
//   {
//     host: 'localhost',
//     dialect: 'mysql' 
//   }
// );