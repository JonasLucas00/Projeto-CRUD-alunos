'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Fotos', 'fileName', 'file_name');
    await queryInterface.renameColumn('Fotos', 'originalName', 'original_name');
    await queryInterface.renameColumn('Fotos', 'alunoID', 'alunos_id');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Fotos', 'fileName', 'file_name');
    await queryInterface.renameColumn('Fotos', 'originalName', 'original_name');
    await queryInterface.renameColumn('Fotos', 'alunoID', 'alunos_id');
  }
};
