const express = require('express');
const bodyParser = require('body-parser');
// require('dotenv').config();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

app = express();

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

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`listening on port: ${PORT}`);
});
