import { IResponse } from "../interfaces/response.interfaces.utils";

export abstract class BaseError extends Error {
    abstract statusCode:number;
    abstract success:boolean;
    abstract type:string;

    constructor(message:string){
        super(message);
        
        Object.setPrototypeOf(this, BaseError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }

    abstract toErrorResponse():IResponse;
};