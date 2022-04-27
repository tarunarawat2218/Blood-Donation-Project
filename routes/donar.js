const path = require('path');
const express = require('express');

const router = express.Router();
router.use(express.static(path.join(__dirname, '/public')));




router.use('/', (req, res, next) =>{
    res.render('donar', 
    {

        pageTitle: "Donar Registration",
        path: '/donar'
    })
});
router.use('/success',(req,res,next)=>{
    res.render('/success')
})

module.exports = router;
