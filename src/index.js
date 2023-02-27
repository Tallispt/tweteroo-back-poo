import cors from 'cors';
import chalk from 'chalk';
import express, { json } from 'express';
import AuthRouter from './routes/auth.routes.js';
import TweetRouter from './routes/tweets.routes.js';

const app = express();

app.use(cors());
app.use(json());

app.use(AuthRouter);
app.use(TweetRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});