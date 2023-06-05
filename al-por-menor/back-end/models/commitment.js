'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commitment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Commitment.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      Commitment.hasOne(models.Product, {
        foreignKey: 'productId'
      });
    }
  }
  Commitment.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    finished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Commitment',
  });
  return Commitment;
};