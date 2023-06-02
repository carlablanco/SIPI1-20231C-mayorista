'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class useraddress extends Model {
    static associate(models) {
      // define association here
    }
  }

  useraddress.init(
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
      addressAlias: DataTypes.STRING,
      province: DataTypes.STRING,
      locality: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      apartmentNumberAndFloor: DataTypes.STRING,
      cellphoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'cellphoneNumber is required',
          },
          isNumeric: {
            msg: 'cellphoneNumber must be a numeric value',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'useraddress',
    }
  );

  return useraddress;
};
