'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {
      Subscription.belongsToMany(models.Product, {
        through: 'SubscriptionProduct',
        foreignKey: 'subscriptionId'
      });
      Subscription.belongsToMany(models.User, {
        through: 'SubscriptionUser',
        foreignKey: 'subscriptionId'
      });
    }
  }
  Subscription.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Subscription',
    }
  );
  return Subscription;
};
