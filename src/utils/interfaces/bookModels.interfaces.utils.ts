import mongoose,{Document} from "mongoose";

interface IBook extends Document {
    title: string;
    author: mongoose.Types.ObjectId; // Reference to 'authors' collection
    country: string;
    imageLink: string;
    language: string[];
    pages: number;
    publishDate: Date;
    sellCount: number;
    rating: number;
    inStock: boolean;
    isVerified: boolean;
  }