const express = require('express');
const mainRouter = require('./src/routes/index');

const app = express();
app.set('view engine','ejs');
app.use(mainRouter);

const port =process.env.PORT || 8080;

app.listen(port,(err)=>{
    if (err) {
        throw err.message;
    }
    else{
        console.log(`Server i s listing on Port : ${port}`);
    }
})