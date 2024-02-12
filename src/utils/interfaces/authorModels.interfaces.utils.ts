import mongoose, {Document} from "mongoose";

export interface IAuthor extends Document {
    userId: mongoose.Types.ObjectId; // Reference to 'users' collection
    books: mongoose.Types.ObjectId[]; // Array of references to 'books' collection
    rating?: number;
    isVerified?: boolean;
  }