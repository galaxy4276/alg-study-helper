import type { GithubCommitResponse } from './types';
import axios, { AxiosResponse } from 'axios';
import userList from '@src/apis/user-list';
import { toCamel } from 'snake-camel';
import dotenv from 'dotenv';

dotenv.config();

const githubAccessToken = process.env.REACT_APP_GITHUB_TOKEN as string;

const getApiUrl = (userBranchName: string) =>
  `https://api.github.com/repos/galaxy4276/algorithm-study/commits?sha=${userBranchName}`;


const parseAxiosResponse =
  (res: AxiosResponse<GithubCommitResponse[]>) => res.data.map(toCamel);


export const getUserCommittedList: (userBranchName: string) =>
  Promise<AxiosResponse<GithubCommitResponse[]>> =
    (userBranchName: string) =>
      axios.get<GithubCommitResponse[]>(getApiUrl(userBranchName), {
        headers: {
          Authorization: `Bearer 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`,
        },
      });


export const getUserCommittedListJson =
  async (userBranchName: string) => ({
    [userBranchName]: parseAxiosResponse(
      await getUserCommittedList(userBranchName)
    ),
  })


export const getAllUserCommittedList = () => {
  const promises = userList.map(branchName => getUserCommittedListJson(branchName));
  return Promise.all(promises);
};
