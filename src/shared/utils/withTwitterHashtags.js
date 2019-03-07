// @flow

export const withTwitterHashtags = (s: string): string =>
  s.replace(/[#]+[A-Za-z0-9-_]+/g, x =>
    x.link(`https://twitter.com/hashtag/${x.replace('#', '')}?src=hash`)
  );
