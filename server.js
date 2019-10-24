const express = require('express');
const router = express.Router();
const path = require('path');
const app = express()
const port = process.env.PORT || '3000'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/cubr', {useNewUrlParser: true})
const routes = require('./routes')
routes(router)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', router)

app.listen(port, function(){
  console.log(port + " yo!")
});


