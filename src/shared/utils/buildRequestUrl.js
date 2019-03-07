// @flow

import { addParam } from 'url-query-handle';

export const buildRequestUrl = (
  url: string,
  limit?: number,
  sinceId?: string
): string => {
  const limitParam = limit ? `limit=${limit}` : '';

  if (!sinceId) {
    return addParam(url, limitParam);
  }

  const sinceIdParam = sinceId ? `since_id=${sinceId}` : '';

  return addParam(addParam(url, limitParam), sinceIdParam);
};
