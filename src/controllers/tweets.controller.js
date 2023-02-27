import { Tweet, tweets } from "../classes.js";

const createTweet = (req, res) => {
  const newTweet = new Tweet({...req.body});
  
  if (newTweet.isValid()) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  newTweet.addTweet();
  res.status(201).send('OK, seu tweet foi criado');
}

const getAllTweets = (req, res) => {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }

  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;
  const reverseTweets = [...tweets].reverse()

  if (tweets.length <= 10) {
    return res.send(reverseTweets);
  }

  console.log(rev)
  res.status(200).send(reverseTweets.slice(start, end));
}

const getTweetByUsername = (req, res) => {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter(t => t.username === username);

  res.status(200).send(tweetsDoUsuario);
}

const TweetController = {
  createTweet,
  getAllTweets,
  getTweetByUsername
}

export default TweetController;