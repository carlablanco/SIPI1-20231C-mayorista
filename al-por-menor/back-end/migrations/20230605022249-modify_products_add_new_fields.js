'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Products',
      'price'
    );

    await queryInterface.addColumn(
      'Products',
      'promotionStartDate',
      {
        type: Sequelize.DATE,
        allowNull: true,
      },
    );

    await queryInterface.addColumn(
      'Products',
      'promotionEndDate',
      {
        type: Sequelize.DATE,
        allowNull: true,
      },
    );

    await queryInterface.addColumn(
      'Products',
      'priceList',
      {
        type: Sequelize.JSON,
        allowNull: true,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    //
  }
};
