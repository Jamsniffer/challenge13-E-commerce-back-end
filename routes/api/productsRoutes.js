const { Product } = require('../../models')

const router = require('express').Router();

router.get('/', (req, res) => {
    //res.send('this is products')
    Product.findAll().then((productData) => {
        res.json(productData);
    });
});

router.get('/:id', (req, res) => {
    //res.send('this is products id')
    Product.findByPk(req.params.id).then((productData) => {
        res.send(productData);
    });
});

router.post('/', (req, res) => {
    //res.send('categories post route reached') 
    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/', (req, res) => {
    //res.send('categories put route reached')
    Category.update(
        {
            product_name: req.body.product_name,
            price: req.body.price,
            stock: req.body.stock
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedProduct) => {
            res.json(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    //res.send('categories delete route reached')
    Product.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedProduct) => {
            res.json(deletedProduct);
        })
        .catch((err) => res.json(err));
});

module.exports = router