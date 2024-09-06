require('dotenv').config();
const express = require('express');

const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes.js');

const app = express();

const PORT = process.env.PORT || 4000;

serverConfig(app);

app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
