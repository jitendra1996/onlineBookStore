import {Schema,model} from 'mongoose';
import { IAddress, IPayment,IUser } from '../utils/interfaces/userModels.interfaces.utils';
import { UserRoles } from '../utils/enums/user.models.enums.utils';
import { ValidationError } from '../utils/errors/validationError.errors.utils';


const userSchema = new Schema<IUser>({
    username:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase: true,
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        required:true,
        minlength: 8,
        maxlength: 20,
        trim: true,
        select:false
    },
    profileImageUrl:{
        type:String,
    },
    mobileNumber:{
        type:String,
        required:true,
        trim: true,
    },
    isMobileVerified:{
        type:Boolean,
        default:false,
    },
    address:{
        type:[{}] as Array<IAddress>,
        required:true,
    },
    paymentDetails:{
        type:[{}] as Array<IPayment>
    },
    userRole:{
        type: String,
        enum: Object.values(UserRoles),
        default: UserRoles.USER, // Default role is 'user'
    }
},{timestamps:true});

// Pre-save middleware for email validation
userSchema.pre('save', function (next) {
    // 'this' refers to the current user document being saved
    const user = this as IUser;
  
    // Custom email validation logic
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(`${user.email}`)) {
      throw new ValidationError('Invalid email format');
    }
  
    // If validation passes, call 'next' to continue with the save process
    next();
  });

export const UserModel = model<IUser>('User', userSchema);