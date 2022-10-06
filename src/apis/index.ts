import axios, { AxiosResponse } from 'axios';
import { toCamel } from 'snake-camel';

import type { GithubCommitResponse } from './types';
import userList, { userListType } from '@src/apis/user-list';


const githubAccessToken = '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';


export const getSprintStartedDate = () => {
  const paramDate = new Date(Date.now());
  const day = paramDate.getDay();
  const diff = paramDate.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(paramDate.setDate(diff)); // .toISOString().substring(0, 10);
};

export const getSprintEndDate = () => {
  const paramDate = new Date(Date.now());
  const day = paramDate.getDay();
  const diff = paramDate.getDate() - day + (day == 0 ? -6 : 1) + 6;
  return new Date(paramDate.setDate(diff)); // .toISOString().substring(0, 10);
};

export const dateToIsoString = (date: Date) => date.toISOString().substring(0, 10);


const getApiUrl = (userBranchName: string) =>
  `
    https://api.github.com/repos/galaxy4276/algorithm-study/commits?sha=${userBranchName}&q=created:${dateToIsoString(getSprintStartedDate())}..${dateToIsoString(getSprintEndDate())}
  `;


const parseAxiosResponse =
  (res: AxiosResponse<GithubCommitResponse[]>) =>
    res.data.map((list) => toCamel(list) as GithubCommitResponse);


export const getUserCommittedList = async (userBranchName: string) =>
  axios.get<GithubCommitResponse[]>(getApiUrl(userBranchName), {
    headers: {
      Authorization: `Bearer ${githubAccessToken}`,
    },
  });


export const getUserCommittedListJson =
  async (userBranchName: userListType) => ({
    [userBranchName as userListType]: parseAxiosResponse(
      await getUserCommittedList(userBranchName)
    ),
  })


export const getAllUserCommittedList = () => {
  const promises: Promise<{[p: string]: GithubCommitResponse[]}>[] =
    userList.map((branchName: userListType) => getUserCommittedListJson(branchName));
  return Promise.all(promises);
};
