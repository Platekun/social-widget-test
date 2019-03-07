// @flow

export const withEmbebbedUrls = (str: string): string =>
  str.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, u =>
    u.link(u)
  );
