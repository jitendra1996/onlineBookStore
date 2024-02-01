const express = require('express');
const path = require('path');


const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('home');
});


module.exports = app;