'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Fotos', 'alunos_id', 'aluno_id')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Fotos', 'alunos_id', 'aluno_id')
  }
};
