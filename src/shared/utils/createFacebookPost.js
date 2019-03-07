// @flow

const getId = (post: ResponseFromFacebook): string => post.id;

const getDisplayName = (post: ResponseFromFacebook): string => post.from.name;

const getAuthorUserName = (post: ResponseFromFacebook): string =>
  post.from.broadcast_name;

const getProfilePhotoUrl = (post: ResponseFromFacebook): string =>
  `https://graph.facebook.com/${post.from.id}/picture`;

const getAuthorProfileUrl = (from: ResponseFromFacebook): string =>
  `http://www.facebook.com/profile.php?id=${from.id}`;

const getContent = (post: ResponseFromFacebook): string => post.message;

const getPostLink = (post: ResponseFromFacebook): string => {
  const postId = post.facebook_id.split('_')[1];

  return `https://facebook.com/${post.from.id}/posts/${postId}`;
};

const getLikes = (post: ResponseFromFacebook): number => post.like_count;

const getCreationTime = (post: ResponseFromFacebook): string =>
  post.created_time;

export const createFacebookPost = (
  post: ResponseFromFacebook
): PostFromFacebook => ({
  id: getId(post),
  network: 'facebook',
  displayName: getDisplayName(post),
  authorUserName: getAuthorUserName(post),
  profilePhoto: getProfilePhotoUrl(post),
  content: getContent(post),
  postLink: getPostLink(post),
  likes: getLikes(post),
  authorProfileUrl: getAuthorProfileUrl(post),
  createdAt: getCreationTime(post)
});
