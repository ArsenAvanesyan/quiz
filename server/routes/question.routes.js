

const router = require('express').Router();
const { query } = require('express');
const {Question} = require('../db/models')

const QuestionServices = require('../services/Question.services')

router.get('/:questionId', async (req, res) => {
    try {
        const { iquestionIdd} = req.params
        const quest = await Question.findAll({where : {id: iquestionIdd}})

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

