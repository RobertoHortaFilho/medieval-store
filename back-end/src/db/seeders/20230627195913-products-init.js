'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'pocao de vida',
        description: 'uma pocao que cura seus ferimentos.',
        price: 30.40,
        image: 'path da imagem pocao',
        id_category: 1,
      },
      {
        name: 'Espadona de ferro',
        description: 'uma espada longa para se defender de todos seus inimigos.',
        price: 120.00,
        image: 'path da imagem espada',
        id_category: 2,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
};
