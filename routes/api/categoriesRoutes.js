const { Category } = require('../../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    //res.send('this is categories')
    Category.findAll().then((categoryData) => {
        res.json(categoryData);
    });
});

router.get('/:id', (req, res) => {
    //res.send('this is categories id')
    Category.findByPk(req.params.id).then((categoryData) => {
        res.send(categoryData);
    });
});

router.post('/', (req, res) => {
    //res.send('categories post route reached') 
    Category.create(req.body)
        .then((newCategory) => {
            res.json(newCategory);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    //res.send('categories put route reached')
    Category.update(
        {
          category_name: req.body.category_name
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then((updatedCategory) => {
          res.json(updatedCategory);
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    //res.send('categories delete route reached')
    Category.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedCategory) => {
            res.json(deletedCategory);
        })
        .catch((err) => res.json(err));
});

module.exports = router