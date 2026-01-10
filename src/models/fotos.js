'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fotos extends Model {

    static associate(models) {
      this.belongsTo(models.Alunos, {
        foreignKey: 'aluno_id',
        as: 'aluno',
        onDelete: 'CASCADE'
      });
    }
  }
  Fotos.init({
    original_name: DataTypes.STRING,
    file_name: DataTypes.STRING,
    aluno_id: DataTypes.INTEGER,
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `http://localhost:3000/images/${this.getDataValue('file_name')}`
      }
    }
  }, {
    sequelize,
    modelName: 'Fotos',
  });
  return Fotos;
};