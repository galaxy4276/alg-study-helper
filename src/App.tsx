import React from 'react';
import { AppLayout } from '@src/components/AppLayout';
import { Quote } from '@src/components/Quote';
import { Header } from '@src/components/Header';
import { CommittedListContext, useFetchGithubApi } from '@src/hooks/use-committed-list.hooks';
import { Profile } from '@src/components/Profile/Profile';


export const App: React.FC = () => {
  const state = useFetchGithubApi();

  return (
    <AppLayout>
      <CommittedListContext.Provider value={state}>
        <Header />
        <Quote writer="현동">
          명언입니다.
        </Quote>
        <Profile />
      </CommittedListContext.Provider>
    </AppLayout>
  );
};
