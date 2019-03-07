// @flow

import { buildRequestUrl } from './buildRequestUrl';
import { mapAPIResponse } from './mapAPIResponse';

export const getPosts = async (
  url: string,
  limit?: number,
  sinceId?: string
): Promise<Array<PostFromFacebook | PostFromTwitter | void>> => {
  const fetched = await fetch(buildRequestUrl(url, limit, sinceId));

  const data: Array<
    ResponseFromFacebook | ResponseFromTwitter
  > = await fetched.json();

  return mapAPIResponse(data);
};
