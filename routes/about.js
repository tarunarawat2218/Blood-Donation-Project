const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path')
router.use(express.static(path.join(__dirname, '/public')));


router.get("/", (req, res, next) =>{
     res.sendFile(path.join(rootDir, '../', '/views','/about.html'));
     
 });


module.exports = router;