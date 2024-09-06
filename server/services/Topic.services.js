const { Model } = require("sequelize");
const { Topic, Question } = require("../db/models");

class TopicServices {
  static getAllTopic = async () =>
    (await Topic.findAll()).map((top) => top.get());

  static getTopicById = async (id) =>
    await Topic.findOne({ where: { id }, include: Question });
}

module.exports = TopicServices;
