import React, { PropsWithChildren, useMemo } from 'react';
import { nanoid } from 'nanoid';

import { useCommittedListContext } from '@src/hooks/use-committed-list.hooks';
import { Avatar } from '@src/components/Profile/Avatar';
import { getFillMeaninglessArray } from '@src/utils/mock';
import userList from '@src/apis/user-list';
import { Profile } from '@src/components/Profile/Profile';
import { isSolvedCurrentSprint } from '@src/components/Profile/utils';


const ProfileLoading = () => (
  <article className="my-5 p-5 shadow-md flex flex-col w-full animate-pulse">
    <div className="flex-all flex-col gap-y-2.5">
      {
        getFillMeaninglessArray(5)
          .map(() =>
            <div className="w-full h-10 animate-pulse bg-slate-200" key={nanoid()} />
          )
      }
    </div>
  </article>
  );

const ProfileLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <section
    className="
      grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8
    "
  >
    { children }
  </section>
);


export const ProfileList: React.FC = () => {
  const { factory, isLoading } = useCommittedListContext();

  const allUserCommittedLists = useMemo(() =>
    userList.map((userBranchName => factory.getUserCommittedList(userBranchName)))
    , [isLoading]);

  const solvedCountList = useMemo(() =>
      allUserCommittedLists
        .map(committedList =>
          committedList?.filter(commitItem => isSolvedCurrentSprint(commitItem.commit.author.date)).length
        )
    , [allUserCommittedLists]);

  if (isLoading || !factory)
    return (
      <ProfileLayout>
        { getFillMeaninglessArray(6).map(() => <ProfileLoading key={nanoid()} />) }
      </ProfileLayout>
    )

  return (
    <ProfileLayout>
      {
        allUserCommittedLists.map(
          (committedList, index) =>
            <Profile
              key={nanoid()}
              data={committedList}
              solvedCount={solvedCountList[index]}
            />
        )
      }
    </ProfileLayout>
  );
};
