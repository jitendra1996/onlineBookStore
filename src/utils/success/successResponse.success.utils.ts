import { IResponse } from "../interfaces/response.interfaces.utils";

export class SuccessResponse{
    private static readonly statusCode: number=200;
    private static readonly success:boolean=true;
    private message:string;

    constructor(message:string){
        this.message = message;
    }

    public static toSuccessResponse(message:string,data?:any):IResponse{
        return {statusCode:this.statusCode,message,data:data || {},success:this.success};
    }
}