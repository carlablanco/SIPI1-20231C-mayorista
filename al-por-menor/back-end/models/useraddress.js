'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class useraddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  useraddress.init({
    userId: DataTypes.INTEGER,
    addressAlias: DataTypes.STRING,
    province: DataTypes.STRING,
    locality: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    apartmentNumberAndFloor: DataTypes.STRING,
    cellphoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'useraddress',
  });
  return useraddress;
};