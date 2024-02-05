export interface IResponse{
    type?: string;
    statusCode: number;
    message: string;
    data?: any;
    success: boolean;
}