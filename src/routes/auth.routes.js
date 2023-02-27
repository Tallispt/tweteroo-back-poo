import { Router } from "express";
import TweetController from "../controllers/tweets.controller.js";

const TweetRouter = Router();

TweetRouter.post('/tweets', TweetController.createTweet);
TweetRouter.get('/tweets/:username', TweetController.getTweetByUsername);
TweetRouter.get('/tweets', TweetController.getAllTweets);

export default TweetRouter;