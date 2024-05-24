import { Router, Request, Response } from "express";
const helloRouter = Router();

//DEFINING ROUTES PATH 


helloRouter.get('/',(req: Request, res: Response) => {
    res.json ({data :" server is up "});
})

export default helloRouter