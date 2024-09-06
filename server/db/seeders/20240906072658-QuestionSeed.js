'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        topicId: 1,
        title: '11grth11jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
        
      },
      {
        topicId: 1,
        title: '22ddgfhhd2jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
        
      },
      {
        topicId: 1,
        title: '333dhytkiuld3jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 1,
        title: '333dadad3jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 1,
        title: '33dhgrega33jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 2,
        title: '11dascsd11jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
        
      },
      {
        topicId: 2,
        title: '222fvgdrgrewfjd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 2,
        title: '333ewfsfewtew3jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 2,
        title: '33fewscddgf33jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
      {
        topicId: 2,
        title: '33efewfytry33jd@mail.ru',
        imgTopic:'https://i.pinimg.com/564x/0c/02/07/0c02078f9bba44110d1c152e23e4a29e.jpg'
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
