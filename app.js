const express = require('express');

const bp = require('body-parser');

const app=express();


//let users=require('./routes/users');
//app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.use('/',require('./routes/index.js'));

app.use('/screenshot',require('./routes/users.js'));




//app.use('/yourimage',require('./routes/puppeteer.js'));





const PORT=3000;

app.listen(PORT,console.log(`successfully connected ${PORT}`));
