const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false})); // only simple data
app.use(bodyParser.json()); // only json format

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.use((req, res, next) => {
    const error = new Error('Não encontrado');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            message: error.message
        }
    });
});

module.exports = app;