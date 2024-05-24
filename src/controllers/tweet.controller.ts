import { Request , Response } from "express";
import { getTweetRepo,createTweetRepo, updateTweetRepo, deleteTweetRepo } from "../repositories/tweet.repositories";

import { ITweetInterface } from "../database/interfaces/tweet.interface";

import { updateUserWithTweetIdRepo } from "../repositories/user.reposotries";

export const getTweetController = async (req: Request, res: Response) =>{

    const tweetId = req.params.tweetId as string;

    try{
        const tweet = await getTweetRepo(tweetId);
        if(tweet){

            res.status(200).json({"data" : tweet})
        }else{
            res.status(500).json({"error" : "Tweet Not created "})
        }

    }catch (error) {
        console.log(error);
        res.status(500).json({"error" : error})

    }

}


export const createTweetController = async (req: Request, res: Response) =>{

    const tweet : ITweetInterface = req.body;

    try{
        const success = await createTweetRepo(tweet);
        if(success){
            const userUpdateSuccess = await updateUserWithTweetIdRepo(tweet.adminId, tweet.tweetId);
            if(userUpdateSuccess){
                res.status(200).json({"data" : tweet})

            }else{
                res.status(500).json({"error" : "user Not Found "})

            }

           
        }else{
            res.status(500).json({"error" : "Tweet Not Found "})
        }

    }catch (error) {
        console.log(error);
        res.status(500).json({"error" : error})

    }

}

export const updateTweetController = async (req: Request, res: Response) =>{

    const updatedTweet : ITweetInterface = req.body;

    try{
        const success = await updateTweetRepo(updatedTweet.tweetId,updatedTweet);
        if(updatedTweet){

            res.status(200).json({data :"tweet updated "})
        }else{
            res.status(500).json({"error" : "Tweet Not updated "})
        }

    }catch (error) {
        console.log(error);
        res.status(500).json({"error" : error})

    }

}


export const deleteTweetController = async (req: Request, res: Response) =>{

    const tweetId = req.params.tweetId as string;

    try{
        const success = await deleteTweetRepo(tweetId);
        if(success){

            res.status(200).json({data :"tweet deleted "})
        }else{
            res.status(500).json({"error" : "Tweet Not deleted "})
        }

    }catch (error) {
        console.log(error);
        res.status(500).json({"error" : error})

    }

}