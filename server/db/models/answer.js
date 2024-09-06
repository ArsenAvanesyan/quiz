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
    questionsId: {
      references: {
        model: "Questions",
        key: "id"
      },
        type: DataTypes.INTEGER
      },
      variants: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT
      }
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};