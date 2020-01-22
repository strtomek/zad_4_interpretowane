const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')

//config
app.use(express.json());

mongoose.connect('mongodb+srv://inter4:' + process.env.PASSWORD + '@interpretowane-7ahy1.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser: true,
});

app.use(morgan('dev'));

const dotenv = require('dotenv');
dotenv.config();

//routes 
var productRoute = require('./src/routes/products/posts')(app);

app.get('/', (req, res, next) => {
    res.send('hi');
});


var server = app.listen(process.env.PORT);

