export const getBeginningOfWeekDate = (): Date => {
  const nowDate = new Date(Date.now());
  const nowDay = nowDate.getDay();
  const diff = nowDate.getDate() - nowDay + (nowDay == 0 ? -6 : 1);
  return new Date(nowDate.setDate(diff));
};

const dateToIsoString = (date: Date) => date.toISOString().substring(0, 10);

export const getSprintStartedDate = () =>
  dateToIsoString(getBeginningOfWeekDate());


export const getSprintEndDate = () => {
  const beginDate = getBeginningOfWeekDate();
  const endDate = new Date(beginDate.setDate(beginDate.getDate() + 6));
  return dateToIsoString(endDate);
};
