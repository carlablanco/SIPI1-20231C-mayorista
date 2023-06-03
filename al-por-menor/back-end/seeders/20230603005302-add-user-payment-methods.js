'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userPaymentMethodsData = [
      {
        userId: 1,
        cardAlias: 'Primary',
        cardHolderName: 'John Doe',
        cardNumber: '4111111111111111',
        expirationDate: '12/24',
        CVV: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        cardAlias: 'Primary',
        cardHolderName: 'Jane Smith',
        cardNumber: '5555555555554444',
        expirationDate: '06/25',
        CVV: '789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        cardAlias: 'Backup',
        cardHolderName: 'Jane Smith',
        cardNumber: '6011000990139424',
        expirationDate: '09/26',
        CVV: '456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('userpaymentmethods', userPaymentMethodsData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userpaymentmethods', null, {});
  }
};
