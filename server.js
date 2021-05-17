const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res)=> {
    res.render('home');
})

app.listen(3000, (req, res) =>{
    console.log('Server running on port 3000');
})
