import { database } from '../../database';
import { DataTypes } from 'sequelize';

const modelName = 'Tags';
const tableName = 'tags';

export const Tag = database.define(
  modelName,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName,
  }
);
