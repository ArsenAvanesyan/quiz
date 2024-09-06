'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Questions }) {
      this.belongsTo(Questions, {
        foreignKey: 'questionId'
      })
    }
  }
  Answer.init({
    questionId: DataTypes.INTEGER,
    variants: DataTypes.TEXT,
    answear: DataTypes.BOOLEAN,
  },

    {
      sequelize,
      modelName: 'Answer',
    });
  return Answer;
};