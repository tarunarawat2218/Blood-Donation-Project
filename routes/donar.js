const path = require('path');
const express = require('express');

const router = express.Router();
router.use(express.static(path.join(__dirname, '/public')));


router.use('/', function(req, res, next){
    res.render('donar', {pageTitle: "Donar Registration"})
});
router.post('/submit',(req,res,next)=>{
    res.redirect('/submit')
})

module.exports = router;