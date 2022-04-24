const path = require('path');
const express = require('express');


const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));

route.use('/search',(req,res,next) =>{
res.render("search",{
    pageTitle: "Search",
    path: '/search'
})
})
router.post('/groups', (req,res,next) =>{
    res.redirect('/groups')
})


module.exports =router;
