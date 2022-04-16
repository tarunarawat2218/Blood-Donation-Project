const path = require('path');
const express = require('express');

const router = express.Router();

router.use('/about', function(req, res, next){
    res.sendFile(path.join(__dirname +'/views/about.html'));

});

module.exports = router;