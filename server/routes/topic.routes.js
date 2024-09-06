const router = require('express').Router();
const { query } = require('express');

const TopicServices = require('../services/Topic.services')

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        
        const topic = await TopicServices.getAllTopic(req.query)
        res.status(200).json({message: 'success', topic})
    } catch ({message}) {
        console.log(message, 'error');
        res.status(500).json({message})
    }
})
