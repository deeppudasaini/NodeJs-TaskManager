const mongoose=require('mongoose');
const TaskSchema=new mongoose.Schema(
    {
        title:String,
        completed:Boolean,
        createdAt:Date,
        updatedAt:Date
    }
);
module.exports=mongoose.model('Tasks',TaskSchema);