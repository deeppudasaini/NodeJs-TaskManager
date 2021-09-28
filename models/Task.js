const mongoose=require('mongoose');
const TaskSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,'Title is required'],
            maxlength:[50,'Title must be less than 50 characters']
        },
        completed:{
            type:Boolean,
            default:false,
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },
        updatedAt:{
            type:Date,
            default:Date.now,
        }
    }
);
module.exports=mongoose.model('Tasks',TaskSchema);