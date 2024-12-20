const e = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

mongoose.connect('mongodb+srv://Norrris_5:ZO0tzRAyTxAdAJKA@cluster0.656kw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 .then (()=> console.log('database connected'))
 .catch((e) => console.log(e));