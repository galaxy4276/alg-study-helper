import { getSprintEndDate, getSprintStartedDate } from '@src/apis';


export const isSolvedCurrentSprint = (date: string) => {
  const commitDate = new Date(date);
  const sprintStartedDate = getSprintStartedDate();
  const sprintEndDate = getSprintEndDate();
  return (commitDate >= sprintStartedDate && commitDate <= sprintEndDate);
};
