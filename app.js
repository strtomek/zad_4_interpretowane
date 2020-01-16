const express = require('express');
const app = express();
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

app.use(morgan('dev'));

// app.get('/', (req, res, next) => {
//     res.send('hi');
// });

var server = app.listen(process.env.PORT);

