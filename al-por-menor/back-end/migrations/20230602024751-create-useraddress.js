'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('useraddresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      addressAlias: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      locality: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      apartmentNumberAndFloor: {
        type: Sequelize.STRING
      },
      cellphoneNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('useraddresses');
  }
};