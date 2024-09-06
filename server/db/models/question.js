'use strict';
const {
  Model
} = require('sequelize');
const topic = require('./topic');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    static associate({Topic}) {
      this.belongsTo(Topic, {
        foreignKey: 'topicId'
      })
    }
  }
  Questions.init({
    topicId: DataTypes.INTEGER,
    title: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};