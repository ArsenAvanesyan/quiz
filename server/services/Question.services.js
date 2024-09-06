const {Questions} = require('../db/models')

class QuestionServices {
    static getOneQuestionByPk = async(id) => {
        const question = Questions.findByPk(id)
        if(question) {
            return question.get()
        }
        return question instanceof Questions
    }
}

module.exports = QuestionServices