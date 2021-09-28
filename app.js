const express= require('express');
const app= express();

app.get('/hello',function(req,res){
    res.send('Task Manager App');
})

const port=5000;
app.listen(port)
