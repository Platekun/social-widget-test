// @flow

const getId = (post: ResponseFromTwitter): string => post.id_str;

const getPostLink = (post: ResponseFromTwitter): string =>
  `https://twitter.com/${post.user.screen_name}/status/${post.id_str}`;

const getDisplayName = (post: ResponseFromTwitter): string => post.user.name;

const getAuthorUserName = (post: ResponseFromTwitter): string =>
  post.user.screen_name;

const getAuthorProfileUrl = (post: ResponseFromTwitter) =>
  `https://twitter.com/${getAuthorUserName(post)}`;

const getProfilePhotoUrl = (post: ResponseFromTwitter) =>
  post.user.profile_image_url_https;

const getContent = (post: ResponseFromTwitter): string => post.text;

const getRetweets = (post: ResponseFromTwitter): number => post.retweet_count;

const getRetweetsLink = (post: ResponseFromTwitter): string =>
  `https://twitter.com/intent/retweet?tweet_id=${getId(post)}`;

const getLikes = (post: ResponseFromTwitter): number => post.favorite_count;

const getLikesLink = (post: ResponseFromTwitter): string =>
  `https://twitter.com/intent/like?tweet_id=${getId(post)}`;

const getRepliesLink = (post: ResponseFromTwitter): string =>
  `https://twitter.com/intent/tweet?in_reply_to=${getId(post)}`;

const getCreationTime = (post: ResponseFromTwitter): string => post.created_at;

export const createTwitterPost = (
  post: ResponseFromTwitter
): PostFromTwitter => ({
  id: getId(post),
  network: 'twitter',
  postLink: getPostLink(post),
  displayName: getDisplayName(post),
  authorUserName: getAuthorUserName(post),
  authorProfileUrl: getAuthorProfileUrl(post),
  profilePhoto: getProfilePhotoUrl(post),
  content: getContent(post),
  retweets: getRetweets(post),
  retweetsLink: getRetweetsLink(post),
  likesLink: getLikesLink(post),
  likes: getLikes(post),
  repliesLink: getRepliesLink(post),
  createdAt: getCreationTime(post)
});
