import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'demeter',
  'root',
  '',
  {
    host: '10.10.10.202',
    dialect: 'mysql' 
  }
);