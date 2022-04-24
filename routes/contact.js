const path = require('path');
const express = require('express');


const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));


router.get("/contact", (req, res, next) =>{
     res.render('contact',
     {pageTitle: "Contact Us",
         path:'/contact'
        })
     
 });
 


module.exports =router;