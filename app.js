require('./db/connect');
const express= require('express');
const app= express();
const tasks=require('./routes/tasks');
/**
 * Middleware
 */
app.use(express.json());
app.use('/api/tasks',tasks);

const port=5000;
app.listen(port)
