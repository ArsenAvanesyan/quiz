"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: "topicId" });
    }
  }
  Topic.init(
    {
      title: DataTypes.TEXT,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};
