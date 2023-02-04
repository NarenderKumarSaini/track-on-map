const express = require('express');
const { default: mongoose } = require('mongoose');
const mongodb = require('mongoose');

const app = express();

const mongoUri =
  'mongodb+srv://track-on-map:9y9DbYeD7oglLif8@cluster0.pwqksnv.mongodb.net/test';

  mongoose.connect(mongoUri,)
app.get('/', (req, res) => {
  res.send('hi there !');
});

app.listen(3001, () => {
  console.log('listening to port 3001');
});
