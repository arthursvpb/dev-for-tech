const { hashSync } = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        email: 'example@example.com',
        password: hashSync('password', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
