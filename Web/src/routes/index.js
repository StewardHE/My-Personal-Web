// API requires
const express = require('express');
const router = express.Router();

// routes
// Home
router.get('/', (req, res) => {
    res.render('index');
})

// export module
module.exports = router;