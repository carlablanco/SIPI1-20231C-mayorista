'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userpaymentmethods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      cardAlias: {
        type: Sequelize.STRING
      },
      cardHolderName: {
        type: Sequelize.STRING
      },
      cardNumber: {
        type: Sequelize.STRING
      },
      expirationDate: {
        type: Sequelize.STRING
      },
      CVV: {
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
    await queryInterface.dropTable('userpaymentmethods');
  }
};