// @flow

export const padDisplayData = (data: string): string =>
  data.length === 1 ? `0${data}` : data;
