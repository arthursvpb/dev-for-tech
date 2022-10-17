const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('post_tags', {
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'posts',
          },
          key: 'id',
        },
        allowNull: false,
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'tags',
          },
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('post_tags');
  },
};
