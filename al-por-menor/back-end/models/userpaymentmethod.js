'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userpaymentmethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userpaymentmethod.init({
    userId: DataTypes.INTEGER,
    cardAlias: DataTypes.STRING,
    cardHolderName: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    expirationDate: DataTypes.STRING,
    CVV: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userpaymentmethod',
  });
  return userpaymentmethod;
};