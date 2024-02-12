import { Schema,model } from "mongoose";

const BookSchema =new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'authors',
        required:true
    },
    country:{
        type:String,
        required:true
    },
    imageLink:{
        type:String,
        required:true
    },
    language:{
        type:[String],
        required:true
    },
    pages:{
        type:Number,
        required:true
    },
    publishDate:{
        type:Date,
        required:true
    },
    sellCount:{
        type:Number,
        required:true,
        default:0,
    },
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    inStock:{
        type:Boolean,
        required:true,
        default:true,
    },
    isVerified:{
        type:Boolean,
        required:true,
        default:true
    }
},{timestamps:true});


export const BookModel = model('book',BookSchema);