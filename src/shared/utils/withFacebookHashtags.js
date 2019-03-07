// @flow

export const withFacebookHashtags = (s: string): string =>
  s.replace(/[#]+[A-Za-z0-9-_]+/g, x =>
    x.link(`https://www.facebook.com/hashtag/${x.replace('#', '')}`)
  );
