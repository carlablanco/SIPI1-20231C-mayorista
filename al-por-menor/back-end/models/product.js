'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Commitment, {
        foreignKey: 'productId'
      });
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
      priceList: DataTypes.JSON,
      promotionStartDate: DataTypes.DATE,
      promotionEndDate: DataTypes.DATE,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
