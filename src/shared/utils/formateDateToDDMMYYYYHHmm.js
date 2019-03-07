// @flow

import { padDisplayData } from './padDisplayData';

export const formateDateToDDMMYYYYHHmm = (s: string): string => {
  const date = new Date(s);

  const day: string = date.getDate().toString();
  const month: string = (date.getMonth() + 1).toString();
  const year: string = date.getFullYear().toString();
  const hour: string = date.getHours().toString();
  const minutes: string = date.getMinutes().toString();

  const DD = padDisplayData(day);
  const MM = padDisplayData(month);
  const YY = padDisplayData(year);
  const HH = padDisplayData(hour);
  const mm = padDisplayData(minutes);

  return `${DD}/${MM}/${YY} ${HH}:${mm}`;
};
