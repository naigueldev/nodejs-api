const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    });
});

router.post('/', (req, res, next) => {

    const product = {
        name: req.body.name,
        price: req.body.price
    };

    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos',
        createdProduct: product
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id

    if (id == 'special') {
        res.status(200).send({
            mensagem: 'ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Passou um id'
        });
    }
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH em produtos'
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id

    res.status(201).send({
        mensagem: `Deletar o produto de id = ${id}`
    });
});

module.exports = router;