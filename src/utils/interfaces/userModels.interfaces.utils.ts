import { Document } from "mongoose";
import { UserRoles } from "../enums/user.models.enums.utils";

export interface IBook extends Document {

};

export interface IPayment extends Document{
    cardHolderName: string;
    cardNumber: string;
    expirationDate: Date;
    securityCode: string;
}

export interface IAddress extends Document {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface IUser extends Document {
    username:String;
    email:String;
    isEmailVerified?:Boolean;
    password:String;
    profileImageUrl?:String;
    mobileNumber:String;
    isMobileVerified?:Boolean;
    address:IAddress[];
    paymentDetails?:IPayment[];
    userRole:UserRoles;
    gender:String;
    dateOfBirth:Date;
}