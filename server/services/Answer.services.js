const {Answer} = require('../db/models')

class AnswerServices {
    static getOneCharacterByPk = async(id) => {
        const answer = Answer.findByPk(id)
        if (answer) {
            return answer.get()
        }
        return answer instanceof Answer
    }
}

module.exports = AnswerServices