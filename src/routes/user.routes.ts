 import { Router } from "express";
 import { getUserController, createUserController, deleteUserController, updateUserController } from "../controllers/user.controller";

 const userRouter = Router();

 //define router path

 userRouter.get("/:userId", getUserController);
 userRouter.post("/", createUserController);
 userRouter.delete("/:userId", deleteUserController);
 userRouter.put("/", updateUserController);

 export default userRouter;
