const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('this is tags')
});

router.get('/:id', (req, res) => {
    res.send('this is tags id')
});

router.post('/', (req, res) => {
    res.send('tags post route reached') 
})

router.put('/', (req, res) => {
    res.send('tags put route reached')
})

router.delete('/:id', (req, res) => [
    res.send('tags delete route reached')
])

module.exports = router