const express = require('express');

const bodyParser= require('body-parser');

//const fetch = require('fetch');


const app=express();


//let users=require('./routes/users');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',require('./routes/index.js'));

app.use('/screenshot',require('./routes/users.js'));

//app.use('/downloadimage',require('./routes/download.js'))




const PORT=process.env.PORT||3000;

app.listen(PORT,console.log(`successfully connected ${PORT}`));
