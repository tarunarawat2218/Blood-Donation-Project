const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const homeRoutes = require('./routes/home');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));


app.use('/search', function(req,res,next){
    res.sendFile(path.join(__dirname + '/views/search.html'));
});

app.use('/about', function(req, res, next){
    res.sendFile(path.join(__dirname +'/views/about.html'));
});
app.use('/contact', function(req,res, next){
    res.sendFile(path.join(__dirname + '/views/contact.html'));
});

app.use('/donar', function(req, res, next){
    res.sendFile(path.join(__dirname + '/views/donar registration.html'));
});

app.use(homeRoutes);

app.post('/submit', function(req,res){
    console.log('Its me');

    /*posts.push({
    inputName4: req.body.name,
    inputEmail4: req.body.email
    });*/
    
    res.redirect('/');
    
})

app.listen(3000, function(){
    console.log('Lets start the project');
});
