const router = require('express').Router();

const TopicServices = require('../services/Topic.services')

router.get('/', async (req, res) => {
    try {
        const topic = await TopicServices.getAllTopic()
        res.status(200).json({message: 'success', topic})
    } catch ({message}) {
        console.log(message, 'error');
        res.status(500).json({message})
    }
})

module.exports = router