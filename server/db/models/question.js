"use strict";
const { Model } = require("sequelize");
const topic = require("./topic");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Topic, Answer }) {
      this.belongsTo(Topic, {
        foreignKey: "topicId",
      });
      this.hasMany(Answer, {
        foreignKey: "questionId",
      });
    }
  }
  Question.init(
    {
      topicId: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      imgTopic: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
