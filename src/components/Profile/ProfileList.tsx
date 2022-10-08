import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';


import { useCommittedListContext } from '@src/hooks/use-committed-list.hooks';
import { getFillMeaninglessArray } from '@src/utils/mock';
import userList from '@src/apis/user-list';
import { Profile } from '@src/components/Profile/Profile';
import { isSolvedCurrentSprint } from '@src/components/Profile/utils';
import { ProfileLayout } from './ProfileLayout';
import { ProfileLoading } from './ProfileLoading';


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
