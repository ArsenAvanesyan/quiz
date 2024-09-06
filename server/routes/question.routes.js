const router = require('express').Router();
const { query } = require('express');

const QuestionServices = require('../services/Question.services')

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        
        const quest = await QuestionServices.getAllTopic(req.query)
        res.status(200).json({message: 'success', quest})
    } catch ({message}) {
        console.log(message, 'error');
        res.status(500).json({message})
    }
})

router.get('/:questionId')
