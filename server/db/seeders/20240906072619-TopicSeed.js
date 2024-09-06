'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
  
      await queryInterface.bulkInsert('Topics', [
        {
          title: 'Попробуй подпой',
          img:'https://i.pinimg.com/564x/d9/94/15/d99415dbaf9768080f908ca46384d353.jpg'
          
        },
        {
          title: 'Сказки',
          img:'https://i.pinimg.com/564x/d9/94/15/d99415dbaf9768080f908ca46384d353.jpg'
          
        },
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Topics', null, {});
  
  }
};
