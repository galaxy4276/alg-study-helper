import React, { HTMLAttributes } from 'react';

import { Problem } from '@src/components/Problem/Problem';
import { Goals } from './Goals';
import { Avatar } from './Avatar';
import { GithubCommitResponse } from '@src/apis/types';
import { algStudyUserInfo } from '@src/apis/user-list';


interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
	data: GithubCommitResponse[];
	solvedCount: number;
}


export const Profile: React.FC<ProfileProps> = ({ data, solvedCount }) => {
	const { author } = data[0];

	const onClickOpenUserProfile = () =>
	 window.open(author.htmlUrl);

	return (
		<article className="my-5 p-5 shadow-md flex flex-col w-full bg-white relative">
			<Avatar url={author.avatarUrl} />
				<span
					onClick={onClickOpenUserProfile}
					className="
						pt-16 self-center text-slate-700 text-xl cursor-pointer
				">
					{ author.login }
				</span>
			<div className="Stiker flex" />
			<Goals
				username={author.login as keyof typeof algStudyUserInfo}
				solvedCount={solvedCount}
			/>
			<Problem commits={data} />
		</article>
	);
};
