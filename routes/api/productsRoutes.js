const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('this is products')
});

router.get('/:id', (req, res) => {
    res.send('this is products id')
});

router.post('/', (req, res) => {
    res.send('categories post route reached') 
})

router.put('/', (req, res) => {
    res.send('categories put route reached')
})

router.delete('/:id', (req, res) => [
    res.send('categories delete route reached')
])

module.exports = router