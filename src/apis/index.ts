import axios, { AxiosResponse } from 'axios';
import { toCamel } from 'snake-camel';

import type { GithubCommitResponse } from './types';
import userList, { userListType } from '@src/apis/user-list';
import { getSprintEndDate, getSprintStartedDate } from '@src/utils/date';


const githubAccessToken = process.env.REACT_APP_GITHUB_TOKEN;


const baseApiUrl = `https://api.github.com/repos/galaxy4276/algorithm-study/commits?sha=`;
export const getApiUrl = (userBranchName: string) =>
  `
    ${baseApiUrl}${userBranchName}&q=created:${getSprintStartedDate()}..${getSprintEndDate()}
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
