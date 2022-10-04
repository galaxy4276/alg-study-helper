export interface GithubAuthor {
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingsUrl: string;
  reposUrl: string;
  type: string;
  siteAdmin: boolean;
}

export interface GithubCommitAuthor {
  name: string;
  email: string;
  date: string;
}

export interface GithubCommit {
  author: GithubCommitAuthor;
  committer: GithubCommitAuthor;
  message: string;
  tree: {
    sha: string;
    url: string;
  };
  url: string;
  commentCount: number;
}

export interface GithubCommitResponse {
  sha: string;
  nodeId: string;
  commit: GithubCommit;
  url: string;
  htmlUrl: string;
  commentsUrl: string;
  author: GithubAuthor;
  committer: GithubAuthor;
}
