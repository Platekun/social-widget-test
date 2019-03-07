declare type ResponseFromTwitter = {
  id_str: string,
  network: 'twitter',
  user: TwitterAuthor,
  text: string,
  created_at: string,
  retweet_count: number,
  favorite_count: number
};
