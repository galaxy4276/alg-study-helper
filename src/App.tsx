import React from 'react';

import { AppLayout } from '@src/components/AppLayout';
import { Header } from '@src/components/Header';
import { ProfileList } from '@src/components/Profile';
import { QuoteSwiper } from '@src/components/Quote';
import { Footer } from '@src/components/Footer';


export const App: React.FC = () => {

  return (
    <AppLayout>
      <Header />
      <QuoteSwiper />
      <ProfileList />
      <Footer />
    </AppLayout>
  );
};
