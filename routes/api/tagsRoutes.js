const { Tag } = require('../../models')

const router = require('express').Router();

router.get('/', (req, res) => {
    //res.send('this is tags')
    Tag.findAll().then((tagData) => {
        res.json(tagData);
    });
});

router.get('/:id', (req, res) => {
    //res.send('this is tags id')
    Tag.findByPk(req.params.id).then((tagData) => {
        res.send(tagData);
    });
});

router.post('/', (req, res) => {
    //res.send('tags post route reached') 
    Tag.create(req.body)
        .then((newTag) => {
            res.json(newTag);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/', (req, res) => {
    //res.send('tags put route reached')
    Tag.update(
        {
            tag_name: req.body.tag_name
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedTag) => {
            res.json(updatedTag);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    //res.send('tags delete route reached')
    Tag.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedTag) => {
            res.json(deletedTag);
        })
        .catch((err) => res.json(err));
});

module.exports = router