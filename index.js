const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controller/error');
const db = require('./util/database');

const app = express();

app.set("view engine", "ejs");

const homeRoutes = require('./routes/home');
const searchRoutes = require('./routes/search');
const donarRoutes = require('./routes/donar');
const contactRoutes = require('./routes/contact');
const aboutRoutes = require('./routes/about');

db.execute('SELECT * FROM groups');


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));


app.use(homeRoutes);
app.use('/search',searchRoutes);
app.use('/donar', donarRoutes);
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);

app.use(errorController.get404);

app.listen(3000, function(){
    console.log('Lets start the project');
});
