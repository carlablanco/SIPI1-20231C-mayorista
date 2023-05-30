'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionProduct extends Model {
    static associate(models) {
      SubscriptionProduct.belongsTo(models.Subscription, {
        foreignKey: 'subscriptionId'
      });
      SubscriptionProduct.belongsTo(models.Product, {
        foreignKey: 'productId'
      });
    }
  }
  SubscriptionProduct.init(
    {
      subscriptionId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'SubscriptionProduct',
    }
  );
  return SubscriptionProduct;
};
