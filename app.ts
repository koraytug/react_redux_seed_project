// const express = require('express');
import * as express from 'express'
import * as path from 'path';
const bodyParser = require('body-parser');
// require('dotenv').config();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4400;

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'react_seed_client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'react_seed_client/build', 'index.html'));
  });
}

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/customerlist', require('./routes/customer.route'));
// app.use('/customers', require('./routes/customer.route'));

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
