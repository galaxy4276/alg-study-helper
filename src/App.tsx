import React from 'react';

import { AppLayout } from '@src/components/AppLayout';
import { Quote } from '@src/components/Quote';
import { Header } from '@src/components/Header';
import { ProfileList } from '@src/components/Profile/ProfileList';


export const App: React.FC = () => {

  return (
    <AppLayout>
      <Header />
      <Quote writer="Maya Angelou">
        You will face many defeats in life, but never let yourself be defeated
      </Quote>
      <ProfileList />
    </AppLayout>
  );
};
