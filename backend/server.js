const express = require('express');
const bodyParser = require('../node_modules/body-parser');
const mainRoutes = require('./routes/main');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/tennis-app', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('node_modules'));

app.use(mainRoutes);
app.use("./models/item", require("./routes/main"))

app.listen(8000, () => {
  console.log("Node.js listening on port " + 8000);
});