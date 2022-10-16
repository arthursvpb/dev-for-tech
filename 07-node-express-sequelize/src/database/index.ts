import { Sequelize } from 'sequelize';

const { DIALECT, USERNAME, PASSWORD, HOST, PORT, DATABASE } = process.env;

export const database = new Sequelize(
  `${DIALECT}://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
);

export const testConnection = async () => {
  try {
    await database.authenticate();

    console.log('🐬 Connected successfully to the database.');
  } catch {
    console.error;
  }
};
