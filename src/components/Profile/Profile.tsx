import React, { HTMLAttributes } from 'react';

import { Problem } from '@src/components/Problem/Problem';
import { Goals } from './Goals';
import { Avatar } from './Avatar';
import { GithubCommitResponse } from '@src/apis/types';
import { algStudyUserInfo } from '@src/apis/user-list';
import { useUserCommitList } from '@src/components/Profile/context/UserCommitListContext';


interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
	solvedCount: number;
}


export const Profile: React.FC<ProfileProps> = ({ solvedCount }) => {
	const commitList = useUserCommitList();
	const { author } = commitList[0];

	const onClickOpenUserProfile = () =>
	 window.open(author.htmlUrl);

	return (
		<article className="my-5 p-5 shadow-lg rounded-md flex flex-col w-full bg-white relative">
			<Avatar url={author.avatarUrl} />
				<span
					onClick={onClickOpenUserProfile}
					className="
						pt-16 self-center text-slate-700 text-xl cursor-pointer
						hover:text-cyan-500 transition
				">
					{ author.login }
				</span>
			<div className="Stiker flex" />
			<Goals
				username={author.login as keyof typeof algStudyUserInfo}
				solvedCount={solvedCount}
			/>
			<Problem />
		</article>
	);
};
