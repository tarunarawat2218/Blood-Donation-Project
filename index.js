const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const homeRoutes = require('./routes/home');
const searchRoutes = require('./routes/search');
const donarRoutes = require('./routes/donar');
const contactRoutes = require('./routes/contact');
const aboutRoutes = require('./routes/about');


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));


app.use(homeRoutes);
app.use('/search',searchRoutes);
app.use('/donar', donarRoutes);
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);

app.use((req, res, next) =>{
     res.status(404).sendFile(path.join(__dirname, '/views','/404.html'));
    
});

app.listen(3000, function(){
    console.log('Lets start the project');
});
