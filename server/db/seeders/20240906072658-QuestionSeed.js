'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        topicId: 1,
        title: 'В какой стране появились самые первые бумажные деньги',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
        
      },
      {
        topicId: 1,
        title: 'Валюта Перу звучит в русском варианте также как название одной из специй. Как она называется',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
        
      },
      {
        topicId: 1,
        title: 'В каком году в СССР была проведена Хрущевская денежная реформа:',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 1,
        title: 'В каких двух городах России печатают денежные знаки',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 1,
        title: 'С какого года начали отмечать День России',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 2,
        title: 'Первый русский царь',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
        
      },
      {
        topicId: 2,
        title: 'Бородинское сражение',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 2,
        title: 'Наименование лыковой обуви русских крестьян',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
