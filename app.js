const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')

//config
app.use(express.json());
app.use(morgan('dev'));

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect('mongodb+srv://' + process.env.USR + ':' + process.env.PASSWORD + process.env.ENDPOINT ,{ useUnifiedTopology: true, useNewUrlParser: true })
.catch(error => console.log(error));

//routes 
var productRoute = require('./src/routes/products')(app);
var productRoute = require('./src/routes/categories')(app);

app.get('/', (req, res, next) => {
    res.send('Not found');
});

var server = app.listen(process.env.PORT);