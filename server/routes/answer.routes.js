const router = require('express').Router();
const { query } = require('express');

const AnswerServices = require('../services/Answer.services')

router.get('/', async (req, res) => {
    try {
        const answ = await AnswerServices.getAllAnswer(req.query)
        res.status(200).json({message: 'success', answ})
    } catch ({message}) {
        console.log(message, 'error');
        res.status(500).json({message})
    }
})

router.get('/:answerId', async (req, res) => {
    try {
        const {answerId} = req.params
        const answer = await AnswerServices.getOneAnswerByPk(+answerId)
        if (answer) {
            res.status(200).json({message: 'success', answer})
            return
        }
    } catch ({message}) {
        console.log(message, 'error universes get');
        res.status(500).json({ message });
    }
})

module.exports = router