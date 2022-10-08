import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { useCommittedListContext } from '@src/hooks/use-committed-list.hooks';
import { getFillMeaninglessArray } from '@src/utils/mock';
import userList from '@src/apis/user-list';
import { Profile } from '@src/components/Profile/Profile';
import { ProfileLayout } from './ProfileLayout';
import { ProfileLoading } from './ProfileLoading';
import { UserCommitListContext } from '@src/components/Profile/context/UserCommitListContext';


export const ProfileList: React.FC = () => {
  const { factory, isLoading } = useCommittedListContext();

  const allUserCommittedLists = useMemo(() =>
    userList.map((userBranchName => factory.getUserCommittedList(userBranchName)))
    , [isLoading]);

  if (isLoading || !factory)
    return (
      <ProfileLayout>
        { getFillMeaninglessArray(6).map(() => <ProfileLoading key={nanoid()} />) }
      </ProfileLayout>
    );

  return (
    <ProfileLayout id="profile-capture">
      {
        allUserCommittedLists.map(
          (committedList, index) => (
              <UserCommitListContext.Provider
                value={committedList}
                key={nanoid()}
              >
                <Profile />
              </UserCommitListContext.Provider>
            )
        )
      }
    </ProfileLayout>
  );
};
