export type GithubUser = {
	avatar_url: string;
	email: string;
	html_url: string;
	name: string;
};

export type GithubAuthor = {
	date: string;
	email?: string;
	name: string;
	username: string;
}

export type CommitWebHook = {
	author: GithubAuthor;
	committer: GithubAuthor;
	message: string;
	url: string;
};

export type WebHookDetails = {
	commits: CommitWebHook[];
};
