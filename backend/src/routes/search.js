const path = require('path');
const express = require('express');


const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));

router.use('/', (req,res,next) =>{
res.render("search",{
    pageTitle: "Search",
    path: '/'
})
})


module.exports =router;
