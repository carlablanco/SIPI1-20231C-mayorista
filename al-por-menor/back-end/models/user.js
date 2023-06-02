'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 255], // Minimum 2, maximum 255 characters
          is: /^[A-Za-z]+$/ // Validates that it contains only letters
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 20], // Minimum 2, maximum 20 characters
          is: /^[A-Za-z]+$/ // Validates that it contains only letters
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true, // Validates that it has an email format
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplier: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      otpCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      otpExpiration: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
