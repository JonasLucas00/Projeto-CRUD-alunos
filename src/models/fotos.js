'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fotos.init({
    name: DataTypes.STRING,
    original_name: DataTypes.STRING,
    file_name: DataTypes.STRING,
    aluno_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fotos',
  });
  return Fotos;
};