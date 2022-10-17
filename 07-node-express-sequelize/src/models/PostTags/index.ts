import { database } from '../../database';
import { DataTypes } from 'sequelize';

import { Post } from '../Posts';
import { Tag } from '../Tags';

const modelName = 'PostTags';
const tableName = 'post_tags';

export const PostTags = database.define(
  modelName,
  {
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id',
      },
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
