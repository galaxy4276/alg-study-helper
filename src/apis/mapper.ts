import { userListType } from '@src/apis/user-list';
import { GithubCommitResponse } from '@src/apis/types';
import { isSolvedCurrentSprint } from '@src/components/Profile/utils';


type CommittedData = {
  [p: string]: GithubCommitResponse[];
}

class CommittedListMapper {
  private userCommitListTable: Map<userListType, GithubCommitResponse[]> = new Map();
  private userSolvedCountTable: Map<userListType, number> = new Map();

  constructor(data: CommittedData[]) {
    data.forEach(userObject => {
      const userBranchName = Object.keys(userObject)[0] as userListType;
      const commitData = Object.values(userObject)[0];
      this.userCommitListTable.set(userBranchName, commitData);
      const solvedCount = commitData
        .filter(({ commit: { author: { date } } }) => isSolvedCurrentSprint(date))
        .length;
      this.userSolvedCountTable.set(userBranchName, solvedCount);
    });
  }

  public getUserCommittedTable() { return this.userCommitListTable; }

  public getUserSolvedTable() { return this.userSolvedCountTable; }

  public getUserCommittedList(user: userListType) {
    return this.userCommitListTable.get(user) as GithubCommitResponse[];
  }
}

export default CommittedListMapper;
