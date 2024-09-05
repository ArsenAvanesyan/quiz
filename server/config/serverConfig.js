const express = require('express');
const removeHeader = require('../middleware/removeHeader');

const serverConfig = (app) => {
  // middleware чаще всего работают с req
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(removeHeader);
};

module.exports = serverConfig;
