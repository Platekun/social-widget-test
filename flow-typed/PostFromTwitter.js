declare type PostFromTwitter = {
  id: string,
  network: 'twitter',
  postLink: string,
  displayName: string,
  authorUserName: string,
  authorProfileUrl: string,
  profilePhoto: string,
  content: string,
  retweets: number,
  retweetsLink: string,
  likes: number,
  likesLink: string,
  repliesLink: string,
  createdAt: string
};
