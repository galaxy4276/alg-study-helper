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


/**
 * @description AxiosResponse 의 Response 값에서 (data: GithubCommitResponse[]) 값을
 * 추려내어 snake_case 의 값들을 camelCase 로 변경하여 배열상태로 반환한다.
 */
const parseAxiosResponse =
  (res: AxiosResponse<GithubCommitResponse[]>) =>
    res.data.map((list) => toCamel(list) as GithubCommitResponse);


/**
 * @description Github Access Token 값을 헤더에 동봏하여 사용자 브랜치네임 기준으로 커밋리스트
 * 값을 요청하여 반환받는다.
 */
export const getUserCommittedList = async (userBranchName: string) =>
  axios.get<GithubCommitResponse[]>(getApiUrl(userBranchName), {
    headers: {
      Authorization: `Bearer ${githubAccessToken}`,
    },
  });

/**
 * @description key: 사용자 브랜치명, values: Github커밋객체[] 형태로 Promise 값을 묶어줍니다.
 */
export const getUserCommittedListJson =
  async (userBranchName: userListType) => ({
    [userBranchName as userListType]: parseAxiosResponse(
      await getUserCommittedList(userBranchName)
    ),
  })


/**
 * @dsec 모든 사용자 브랜치명 기준으로 각각 커밋리스트 요청의 비동기 수행(Promise.all) 을  반환합니다.
 */
export const getAllUserCommittedList = () => {
  const promises: Promise<{[p: string]: GithubCommitResponse[]}>[] =
    userList.map(getUserCommittedListJson);
  return Promise.all(promises);
};
