require('dotenv').config();
const express = require('express');
const app = express();

const uploadRouter = require('./routes/uplodRoutes');

app.use('/api/v1/upload',uploadRouter);

module.exports = app;