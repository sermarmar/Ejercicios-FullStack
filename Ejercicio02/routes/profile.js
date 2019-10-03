const express = require('express');
const router = express.Router();

// http://localhost:3000/profile/main
router.get('/main', (req, res) => {
    res.send('Has entrado en main (http://localhost:3000/profile/main)');
});


// http://localhost:3000/profile/details
router.get('/details', (req, res) => {
    res.send('Has entrado en detalles de tu perfil (http://localhost:3000/profile/details)');
});

module.exports = router;