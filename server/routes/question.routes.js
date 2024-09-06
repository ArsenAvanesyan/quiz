const router = require('express').Router();
const { query } = require('express');

const QuestionServices = require('../services/Question.services')

router.get('/', async (req, res) => {
    try {
        const quest = await QuestionServices.getAllQuestions(req.query)
        res.status(200).json({message: 'success', quest})
    } catch ({message}) {
        console.log(message, 'error');
        res.status(500).json({message})
    }
})

router.get('/:questionId', async (req, res) => {
    try {
        const {questionId} = req.params
        const question = await QuestionServices.getOneQuestionByPk(+questionId)
        if (question) {
            res.status(200).json({message: 'success', question})
            return
        }
    } catch ({message}) {
    console.log(message, 'error universes get');
    res.status(500).json({ message });
    }
})

module.exports = router