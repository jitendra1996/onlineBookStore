import { Schema,model } from "mongoose";
import { IAuthor } from "../utils/interfaces/authorModels.interfaces.utils";

const AuthorSchema = new Schema<IAuthor>({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    books:{
        type:[{
            type:Schema.Types.ObjectId,
            ref:'books',
        }]
    },
    rating:{
        type:Number
    },
    isVerified:{
        type:Boolean
    }
},{timestamps: true});

export const AuthorModel = model<IAuthor>('author', AuthorSchema);