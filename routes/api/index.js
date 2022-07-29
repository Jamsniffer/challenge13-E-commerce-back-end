const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const productsRoutes = require('./productsRoutes');
const tagsRoutes = require('./tagsRoutes');

router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);
router.use('/tags', tagsRoutes);

module.exports = router