'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        questionId: 1,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 1,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 1,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 1,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 2,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 2,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 2,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 2,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 3,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 3,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 3,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 3,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 4,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 4,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 4,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 4,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 5,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 5,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 5,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 5,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 6,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 6,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 6,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 6,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 7,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 7,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 7,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 7,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 8,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 8,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 8,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 8,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 9,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 9,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 9,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 9,
        variants: 'eeferfef',
        answear: true,
      },
      {
        questionId: 10,
        variants: 'eeferfef',
        answear: false,

      },
      {
        questionId: 10,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 10,
        variants: 'eeferfef',
        answear: false,
      },
      {
        questionId: 10,
        variants: 'eeferfef',
        answear: true,
      },


    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Answers', null, {});

  }
};
