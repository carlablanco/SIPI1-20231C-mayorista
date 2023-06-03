'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Warren',
      lastName: 'Buffett',
      email: 'warren@buffett.com',
      password: '$2b$10$ORzu3T9bG8IC3OwM9bj1Pu98X1NGmrBJfxGplRk3BsfgSJ8y0ruHm', //123456
      isAdmin: false,
      otpCode: null,
      otpExpiration: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Joe',
      lastName: 'Biden',
      email: 'joe@biden.com',
      password: '$2b$10$ORzu3T9bG8IC3OwM9bj1Pu98X1NGmrBJfxGplRk3BsfgSJ8y0ruHm', //123456
      isAdmin: true,
      otpCode: null,
      otpExpiration: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
