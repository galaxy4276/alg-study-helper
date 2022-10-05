import React from 'react';

import { AppLayout } from '@src/components/AppLayout';
import { Quote } from '@src/components/Quote';
import { Header } from '@src/components/Header';
import { Profile } from '@src/components/Profile/Profile';


export const App: React.FC = () => {
  return (
    <AppLayout>
      <Header />
      <Quote writer="현동">
        명언입니다.
      </Quote>
      <Profile />
    </AppLayout>
  );
};
