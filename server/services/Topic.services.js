const {Topic} = require('../db/models')

class TopicServices {
    static getAllTopic = async () => {
        try {
        const topics = await (Topic.findAll({ where: query})).map((top) => top.get())
        return topics
    } catch ({message}) {
        return {status: 'error', message}
    }
}
}

module.exports = TopicServices