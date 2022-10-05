import { userListType } from '@src/apis/user-list';
import { GithubCommitResponse } from '@src/apis/types';


type CommittedData = {
  [p: string]: GithubCommitResponse[];
}

class CommittedListMapper {
  private map: Map<userListType, GithubCommitResponse[]> = new Map();

  constructor(data: CommittedData[]) {
    data.forEach(userObject => {
      const userBranchName = Object.keys(userObject)[0] as userListType;
      const commitData = Object.values(userObject)[0];
      this.map.set(userBranchName, commitData);
    });
  }

  public getMap() { return this.map; }

  public getUserCommittedList(user: userListType) {
    return this.map.get(user) as GithubCommitResponse[];
  }
}

export default CommittedListMapper;
