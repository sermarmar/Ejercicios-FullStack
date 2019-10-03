const express = require('express');
const router = express.Router();

// http://localhost:3000/shop
router.get('/', (req, res) => {
    res.send('Has entrado en tienda (http://localhost:3000/shop)');
});


// http://localhost:3000/profile/details
router.get('/house', (req, res) => {
    res.send('Has entrado en la tienda de muebles (http://localhost:3000/profile/details)');
});

module.exports = router;