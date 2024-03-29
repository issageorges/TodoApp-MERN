import mongoose from "mongoose";


const todoSchema= new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    creator: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true,
    },

},{
    timestamps:true
})


const Todo = mongoose.model("Todo",todoSchema)

export default Todo