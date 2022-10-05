import { createContext, useContext, useLayoutEffect, useState } from 'react';

import { getAllUserCommittedList } from '@src/apis';
import CommittedListMapper from '@src/apis/mapper';


type HookProps = {
  factory: CommittedListMapper;
  isLoading: boolean;
}

export type {
  HookProps,
}


const CommittedListContext = createContext<HookProps>({
  factory: new CommittedListMapper([]),
  isLoading: true,
});


/**
 * @desc CommittedListContext 의 Consumer hook 입니다.
 */
const useCommittedListContext = () =>
   useContext(CommittedListContext);


/**
 * @desc 모든 사용자의 최신일 순 Commit 데이터를 가져옵니다.
 */
const useFetchGithubApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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


/**
 * @desc useFetchGithubApi 의 반환값과 Context Provider 컴포넌트를 제공합니다.
 */
const useCommittedList = () => {
  const state = useFetchGithubApi();
  return {
    Provider: CommittedListContext.Provider,
    ...state,
  };
};


export default useCommittedList;

export {
  useFetchGithubApi,
  CommittedListContext,
  useCommittedListContext,
};
