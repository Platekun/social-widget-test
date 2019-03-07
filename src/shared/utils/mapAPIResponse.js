// @flow

import { createFacebookPost } from './createFacebookPost';
import { createTwitterPost } from './createTwitterPost';

const createFromResponse = (
  item: ResponseFromFacebook | ResponseFromTwitter
): PostFromFacebook | PostFromTwitter | void => {
  if (item.network === 'twitter') {
    return createTwitterPost(item);
  }

  if (item.network === 'facebook') {
    return createFacebookPost(item);
  }
};

export const mapAPIResponse = (
  posts: Array<ResponseFromFacebook | ResponseFromTwitter>
): Array<PostFromFacebook | PostFromTwitter | void> =>
  posts.map(createFromResponse).filter(Boolean);
