import { Sequelize } from 'sequelize';

// const dbConfig = {
//   host: process.env.DB_Host,
//   port: process.env.DB_Port,
//   username: process.env.DB_User,
//   password: process.env.DB_Password,
//   database: process.env.DB_Name,
//   dialect: 'mysql' 
// }

// export const sequelize = new Sequelize(
//   dbConfig
// );

export const sequelize = new Sequelize(
  'demeter',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql' 
  }
);