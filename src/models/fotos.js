'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fotos extends Model {

    static associate(models) {
      this.belongsTo(models.Alunos, { foreignKey: 'aluno_id', as: 'aluno' });
    }
  }
  Fotos.init({
    original_name: DataTypes.STRING,
    file_name: DataTypes.STRING,
    aluno_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fotos',
  });
  return Fotos;
};