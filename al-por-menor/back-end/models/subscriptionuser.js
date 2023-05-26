'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionUser extends Model {
    static associate(models) {
      // define association here
    }
  }
  SubscriptionUser.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subscriptionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cadence: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [['WEEKLY', 'BIWEEKLY', 'MONTHLY', 'BIMONTHLY']],
            msg: 'Cadencia inválida.',
          },
        },
      },
      numberOfPeople: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: 'El numero de personas debe ser al menos 1.',
          },
          max: {
            args: [5],
            msg: 'El numero de personas máximo es 5.',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'SubscriptionUser',
    }
  );
  return SubscriptionUser;
};
