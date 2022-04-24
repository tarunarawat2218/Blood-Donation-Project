const path = require('path');
const express = require('express');

const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));


router.get("/about", (req, res, next) =>{
     res.render('about', {pageTitle: "About", path: '/about'})
 });


module.exports = router;