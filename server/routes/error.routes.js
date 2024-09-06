const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(404).json({ message: '404 вот и бесишься' });
});

module.exports = router;
