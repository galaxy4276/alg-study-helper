import { createContext, useContext } from 'react';
import { GithubCommitResponse } from '@src/apis/types';


export const UserCommitListContext = createContext<GithubCommitResponse[]>([]);

export const useUserCommitList = () =>
  useContext(UserCommitListContext);
