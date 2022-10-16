const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn('posts', 'user_id', {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id',
      },
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('posts', 'user_id');
  },
};
