import express,{ Request,Response} from "express";
import path from "path";


const app = express();

app.set('views',path.join(__dirname,'..', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'..','public')));
app.use(express.json());

app.get('/',(_req:Request,res:Response)=>{
    res.render('home');
});


export default app;