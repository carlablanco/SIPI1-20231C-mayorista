'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userAddressesData = [
      {
        userId: 1,
        addressAlias: 'Home',
        province: 'California',
        locality: 'Los Angeles',
        street: '123 Main Street',
        number: '1A',
        postalCode: '90001',
        apartmentNumberAndFloor: '2nd Floor',
        cellphoneNumber: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        addressAlias: 'Work',
        province: 'New York',
        locality: 'New York City',
        street: '456 Broadway',
        number: '5B',
        postalCode: '10001',
        apartmentNumberAndFloor: '1st Floor',
        cellphoneNumber: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        addressAlias: 'Vacation Home',
        province: 'Florida',
        locality: 'Miami',
        street: '789 Ocean Avenue',
        number: '10C',
        postalCode: '33101',
        apartmentNumberAndFloor: '3rd Floor',
        cellphoneNumber: '9876543210',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('useraddresses', userAddressesData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('useraddresses', null, {});
  }
};
