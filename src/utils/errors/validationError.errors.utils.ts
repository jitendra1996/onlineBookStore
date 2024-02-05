import { BaseError } from "./baseError.errors.utils";

export class ValidationError extends BaseError {
    type: string="VALIDATION_ERROR";
    statusCode: number= 400;
    success: boolean= false;
    
    constructor(message: string){
        super(message);
    }

    toErrorResponse(): { type: string; statusCode: number; message: string; success: boolean; } {
        return {type: this.type, statusCode: this.statusCode, message: this.message, success: this.success};
    }
};