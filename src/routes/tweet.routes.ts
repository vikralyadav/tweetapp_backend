 import { Router } from "express";
 import { getTweetController, createTweetController, deleteTweetController, updateTweetController } from "../controllers/tweet.controller";

 const tweetRouter = Router();

// //define router path

 tweetRouter.get("/:tweeetId", getTweetController);
 //tweetRouter.get("/", getAllTweetController);
 tweetRouter.post("/", createTweetController);
 tweetRouter.delete("/:tweeetId", deleteTweetController);
 tweetRouter.put("/", updateTweetController);

 export default tweetRouter;
