/* server connection config */

import { Sequelize } from 'sequelize';

const { DIALECT, USERNAME, PASSWORD, HOST, PORT, DATABASE } = process.env;

export const DATABASE_CONNECTION_URI = `${DIALECT}://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

export const database = new Sequelize(DATABASE_CONNECTION_URI);

export const testConnection = async () => {
  try {
    await database.authenticate();

    console.log('🐬 Connected successfully to the database.');
  } catch {
    console.error;
  }
};
