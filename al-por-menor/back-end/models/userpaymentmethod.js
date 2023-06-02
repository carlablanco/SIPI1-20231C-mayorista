'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class userpaymentmethod extends Model {
    static associate(models) {
      userpaymentmethod.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }

  userpaymentmethod.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'userId is required',
          },
          isInt: {
            msg: 'userId must be an integer',
          },
        },
      },
      cardAlias: DataTypes.STRING,
      cardHolderName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'cardHolderName is required',
          },
        },
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'cardNumber is required',
          },
          isCreditCard: {
            msg: 'cardNumber must be a valid credit card number',
          },
        },
      },
      expirationDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'expirationDate is required',
          },
          isDate: {
            msg: 'expirationDate must be a valid date',
          },
        },
      },
      CVV: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'CVV is required',
          },
          isNumeric: {
            msg: 'CVV must be a numeric value',
          },
          len: {
            args: [3, 4],
            msg: 'CVV must have 3 or 4 digits',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'userpaymentmethod',
    }
  );

  return userpaymentmethod;
};
