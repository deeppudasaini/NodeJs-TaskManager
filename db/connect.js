const mongoose =require('mongoose');

const connectionString='mongodb+srv://deep:deep@cluster0.cnerh.mongodb.net/Task_Manager?retryWrites=true&w=majority'

mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
console.log('connected to database');
}).catch(()=>{
    console.log('error in connection');
})