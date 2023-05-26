'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 255], // Minimo 2, maximo 20 caracteres
          is: /^[A-Za-z]+$/ // Valida que solo tenga letras
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 20], // Minimo 2, maximo 20 caracteres
          is: /^[A-Za-z]+$/ // Valida que solo tenga letras
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true, // Valida que sea un formato mail
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
        validate: {
          len: [6, 30], // Minimo 6, maximo 30 caracteres
        },
      },
      supplier: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      otpCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      otpExpiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
