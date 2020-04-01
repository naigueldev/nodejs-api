const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Get all orders'
    });
});

router.post('/', (req, res, next) => {

    const order = {
        product_id: req.body.product_id,
        quantity: req.body.quantity
    }
    res.status(201).send({
        mensagem: 'Order created at',
        createdOrder: order
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        mensagem: `Get order by id = ${id}`
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id

    res.status(201).send({
        mensagem: `Delete order id = ${id}`
    });
});

module.exports = router;