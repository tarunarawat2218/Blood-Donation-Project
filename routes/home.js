const path = require('path');
const express = require('express');

const router = express.Router();
router.use(express.static(path.join(__dirname, '/public')));


router.get("/", (req, res, next) =>{
     res.sendFile(path.join(__dirname, '../', '/views','/home.html'));
     
 });
// router.get("/", function(req, res, next){
//     res.sendFile(path.join(__dirname +'/views/home.html'));
     
// });


module.exports =router;