const {Answer} = require('../db/models')

class AnswerServices {
    static getAllAnswer = async() => {
        try {
            const answer = await (Answer.findAll({ where: query})).map((top) => top.get())
            return answer
        } catch ({message}) {
            return { status: 'error', message}
        }
    }

    static getOneAnswerByPk = async(id) => {
        try {
            const answer = Answer.findByPk(id)
            return answer.get() 
        } catch ({message}) {
            return { status: 'error', message}
        }
    }
}

module.exports = AnswerServices