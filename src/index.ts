import express, {Express} from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/routes";
import mongoose from "mongoose";
import { error } from "console";

const app:Express = express();
const server = http.createServer(app)

//express config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}))
app.set("PORT", 3000);
app.set("BASE_URL", "localhost")

dotenv.config()

//defining router
app.use("/api/v1", router)

//mongoose connections 

const mongoURI = process.env.MONGO_DB_URI

if(!mongoURI) {
    console.error("mongo db url not reached")
    process.exit(1);
}

mongoose.connect(mongoURI, {}).then(() => {
    console.log("mongodb is connected ")
})
.catch((error)=>{
    console.log(error);

})


try {

    const port: Number = app.get("PORT")
    
    const baseUrl: String = app.get("BASE_URL")
    
    server.listen(port, (): void => {
    
    console.log('Server is listening ')
    })
}
    
     catch (error) {
    
    console.log(error)
    
    }
    
    export default server;
