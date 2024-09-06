const { where } = require('sequelize')
const {Questions} = require('../db/models')
const { query } = require('express')

class QuestionServices {
    static getAllQuestions = async(id) => {
        const questions = await (Questions.findAll({ where: query })).map((ques) => ques.get())
        return  questions
    }
    
    static getOneQuestionByPk = async(id) => {
        const question = Questions.findByPk(id)
        if(question) {
            return question.get()
        }
        return question instanceof Questions
    }

}

module.exports = QuestionServices