'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'password_hash', {
      type: Sequelize.STRING,
      allowNull: true
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'password_hash')

  }
};
