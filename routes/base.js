//endpoint /base route

const express = require('express');
const baseRouter = express.Router();

baseRouter.get('/', () => {
  console.log('Welcome to the base route');
});

module.exports = baseRouter;
