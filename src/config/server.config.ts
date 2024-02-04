import 'dotenv/config';

export const port:number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
export const hostname:string  = process.env.HOSTNAME || 'localhost';
export const mode:string = process.env.NODE_ENV || 'development';