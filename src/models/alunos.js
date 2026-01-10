'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Fotos, {
        foreignKey: 'aluno_id',
        as: 'fotos',
        onDelete: 'CASCADE',
        hooks: 'true'
      });
    }
  }
  Alunos.init({
    name: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email invalido'
        }
      }
    },
    idade: DataTypes.STRING,
    peso: DataTypes.STRING,
    altura: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};