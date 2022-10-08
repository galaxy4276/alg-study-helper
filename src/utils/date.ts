/**
 * @description 이번 주의 시작날짜로 설정된 Date 객체를 반환합니다.
 */
export const getBeginningOfWeekDate = (): Date => {
  const nowDate = new Date(Date.now());
  const nowDay = nowDate.getDay();
  const diff = nowDate.getDate() - nowDay + (nowDay == 0 ? -6 : 1);
  return new Date(nowDate.setDate(diff));
};

const dateToIsoString = (date: Date) => date.toISOString().substring(0, 10);


/**
 * @description 이번 주의 시작날짜(Monday)를 YYYY-MM-DD 형태로 반환합니다.
 */
export const getSprintStartedDate = () =>
  dateToIsoString(getBeginningOfWeekDate());


/**
 * @description 이번 주의 종료날짜(Sunday)를 YYYY-MM-DD 형태로 반환합니다.
 */

export const getSprintEndDate = () => {
  const beginDate = getBeginningOfWeekDate();
  const endDate = new Date(beginDate.setDate(beginDate.getDate() + 6));
  return dateToIsoString(endDate);
};
