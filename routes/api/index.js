const router = require('express').Router();


// router.use('/', (req, res)=> {
//     res.send('made it to routes/api/index.js')
// });

router.get('/categories', (req, res) => {
    res.send('this is categories')
});

router.get('/products', (req, res) => {
    res.send('this is products')
});

router.get('/tags', (req, res) => {
    res.send('this is tags')
});

module.exports = router