const path = require('path');
const express = require('express');

const router = express.Router();

router.use('/donar registration', function(req, res, next){
    res.sendFile(path.join(__dirname, '../', '/views', '/donar.html'));
    
});

module.exports = router;