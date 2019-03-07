// @flow

export const withTwitterUsername = (s: string): string =>
  s.replace(/[@]+[A-Za-z0-9-_]+/g, x =>
    x.link(`http://twitter.com/${x.replace('@', '')}`)
  );
