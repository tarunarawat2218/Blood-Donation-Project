const path = require('path');
const express = require('express');

const router = express.Router();
router.use(express.static(path.join(__dirname, '/public')));


router.use('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../', '/views', '/donar.html'));
    
});

module.exports = router;