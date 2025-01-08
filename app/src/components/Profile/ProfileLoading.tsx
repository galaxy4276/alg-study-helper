import React from 'react';
import { nanoid } from 'nanoid';

import { getFillMeaninglessArray } from '@src/utils/mock';
import { Avatar } from '@src/components/Profile/Avatar';


export const ProfileLoading = () => (
  <article className="my-5 p-5 shadow-md flex flex-col w-full animate-pulse relative">
    <Avatar isLoading />
    <div className="flex-all flex-col gap-y-2.5 pt-20">
      {
        getFillMeaninglessArray(5)
          .map(() =>
            <div className="w-full h-10 animate-pulse bg-slate-200" key={nanoid()} />
          )
      }
    </div>
  </article>
);
