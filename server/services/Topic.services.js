const {Topic} = require('../db/models')

class TopicServices {
    static getAllTopic = async () => (await Topic.findAll({ where: query})).map((top) => top.get())
}

module.exports = TopicServices