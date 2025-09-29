'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async passValidate(password) {
      return await bcrypt.compare(password, this.password_hash);
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 255],
          msg: 'campo nome deve ter entre 3 e 255 caracteres \n'
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: '',
      validate: {
        isEmail: {
          msg: 'Email invalido \n'
        },
      },
      unique: {
        msg: 'Email já consta no BD'
      }
    },
    password_hash: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    password: {
      type: DataTypes.VIRTUAL,
      defaultValue: '',
      validate: {
        len: {
          args: [6, 50],
          msg: 'Senha precisa ter entre 6 e 50 \n'
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeSave', async (user) => {
    if (user.password) {
      user.password_hash = await bcrypt.hash(user.password, 8);
    }
  })

  return User;
};