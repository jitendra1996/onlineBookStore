import express,{ NextFunction, Request,Response} from "express";
import path from "path";
import { BaseError } from "./utils/errors/baseError.errors.utils";


const app = express();

app.set('views',path.join(__dirname,'..', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'..','public')));
app.use(express.json());

app.get('/',(_req:Request,res:Response)=>{
    res.render('home');
});

// Express error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Check for specific error types
    if (err instanceof BaseError) {
      return res.status(err.statusCode).json(err.toErrorResponse());
    }
  
    // For other errors, a generic error response
    res.status(500).json({ errorType:"INTERNAL_SERVER_ERROR",statusCode:500, message: 'Something went wrong',success:false });
});
  
export default app;