const express = require('express');
const slash = require('express-slash');

require('dotenv').config();

const baseRouter = require('./routes/base');
const locationRouter = require('./routes/location');
const weatherRouter = require('./routes/weather');

// Set up express app
const app = express();
app.use(express.json());

//router.
app.use('/v1', baseRouter);
app.use('/location', locationRouter);
app.use('/', weatherRouter);
app.use(slash());

//port
const port = parseInt(process.env.PORT) || 8000;
app.set('port', port);
app.listen(port, () => console.log('app listening in port: ' + port));

module.exports = app;
