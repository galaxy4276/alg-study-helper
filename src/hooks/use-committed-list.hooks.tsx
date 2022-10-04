import { createContext, useContext, useLayoutEffect, useState } from 'react';

import { GithubCommitResponse } from '@src/apis/types';
import { userListType } from '@src/apis/user-list';
import { getAllUserCommittedList } from '@src/apis';
import CommittedListMapper from '@src/apis/mapper';


export type CommittedListProps = {
  [p in keyof userListType | string]: GithubCommitResponse[];
};

export type HookProps = {
  factory: CommittedListMapper;
  isLoading: boolean;
}


export const CommittedListContext = createContext<HookProps | null>(null);


export const useCommittedListContext = () => {
  const state = useContext(CommittedListContext);
  if (!state) throw new Error('committedList state is not exists');
  return state;
};


export const useFetchGithubApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [factory, setFactory] = useState<CommittedListMapper>(
    new CommittedListMapper([])
  );

  useLayoutEffect(() => {
    (async () => {
      setIsLoading(true);
      const userCommittedList = await getAllUserCommittedList();
      setFactory(new CommittedListMapper(userCommittedList));
      setIsLoading(false);
    })();
  }, []);

  return {
    factory,
    isLoading,
  };
};
