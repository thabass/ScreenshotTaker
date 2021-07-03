const express = require('express');

const app=express();



app.use('/',require('./routes/index.js'));

app.use('/users',require('./routes/users.js'));






const PORT=3000;

app.listen(PORT,console.log(`successfully connected ${PORT}`));