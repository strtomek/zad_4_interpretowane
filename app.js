const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config();

// mongoose.connect('mongodb+srv://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@interpretowane-7ahy1.gcp.mongodb.net/test?retryWrites=true&w=majority', {
//     useUnifiedTopology: true, useNewUrlParser: true,

// })
mongoose.connect('mongodb+srv://inter4:' + process.env.PASSWORD +'@interpretowane-7ahy1.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser: true,

})
    .then(e => {
        console.log(e);
    })
    .catch(e => {
        console.log(e);
    })
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.send('hi');
});

var server = app.listen(process.env.PORT);

