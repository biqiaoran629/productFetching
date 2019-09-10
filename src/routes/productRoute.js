const express = require('express');
const productEndpoint = require('../endpoints/productEndpoint');

const router = express.Router();

/**
 * @route GET api/product/test
 * @desc Tests product route
 * @access Public
 */

router.get('/test', (req, res) => {
  res.json({ msg: 'Product works' });
});

/**
 * @route POST api/product/:asin_id
 * @desc Tests product route
 * @access Public
 */

router.get('/:asin_id', productEndpoint.getProduct);

module.exports = router;
