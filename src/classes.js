export class User {
  constructor ({username, avatar}) {
    this.username = username;
    this.avatar = avatar;
  }

  isValid() {
    return (!this.username || !this.avatar)
  }

  addUser() {
    users.push({username: this.username, avatar: this.avatar})
  }
};

export class Tweet {
  constructor ({username, tweet}) {
    this.username = username;
    this.tweet = tweet;
    this.avatar = users.find(user => user.username === this.username);
  }

  isValid() {
    return (!this.username || !this.tweet);
  }

  addTweet() {
    tweets.push({
      username: this.username,
      tweet: this.tweet,
      avatar: this.avatar
    })
  }
};

export const users = [];
export const tweets = [];