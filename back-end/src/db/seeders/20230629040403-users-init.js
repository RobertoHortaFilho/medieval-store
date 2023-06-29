'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        password: '8C6976E5B5410415BDE908BD4DEE15DFB167A9C873FC4BB8A81F6F2AB448A918', //admin sha256
        alias: 'adiministrador',
        photo: '',
        permission: true,
      },
      {
        name: 'user',
        password: '04F8996DA763B7A969B1028EE3007569EAF3A635486DDAB211D512C85B9DF8FB', //user sha256
        alias: 'usuario123',
        photo: '',
        permission: false,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
