import { getBeginningOfWeekDate } from '@src/utils/date';


export const isSolvedCurrentSprint = (date: string) => {
  const commitDate = new Date(date);
  const beginDate = getBeginningOfWeekDate();
  const sprintEndDate = new Date(beginDate.setDate(beginDate.getDate() + 6));
  return (commitDate >= beginDate && commitDate <= sprintEndDate);
};
