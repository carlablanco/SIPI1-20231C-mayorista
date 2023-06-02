'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {

    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      measurementUnit: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [['Kg', 'Unidad']],
            msg: 'Invalid measurement unit',
          },
        },
      },
      brand: DataTypes.STRING,
      supplyingCompany: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
