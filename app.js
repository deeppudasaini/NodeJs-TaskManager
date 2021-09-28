
const express= require('express');
const app= express();
const tasks=require('./routes/tasks');
const connectDb= require('./db/connect.js');
const notFound= require('./middlewares/404notfound');
require('dotenv').config();
/**
 * Middleware
 */
app.use(express.json());
app.use(notFound);
app.use('/api/tasks',tasks);

const port=5000;
const start=async()=>{
    try{
        await connectDb(process.env.MONGODB_URI);
        app.listen(port,()=>{
            console.log(`Server started on port ${port}`);
        });
    }catch(err){
        console.log(err);
    }
};
start();

