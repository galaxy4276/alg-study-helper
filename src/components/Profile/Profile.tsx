import React, { HTMLAttributes } from 'react';

import { Problem } from '@src/components/Problem/Problem';
import { Goals } from './Goals';
import { Avatar } from './Avatar';
import { GithubCommitResponse } from '@src/apis/types';


interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
	data: GithubCommitResponse[];
}


export const Profile: React.FC<ProfileProps> = ({ data }) => {
	const { author } = data[0];

	return (
		<article className="my-5 p-5 shadow-md flex flex-col w-full bg-white relative">
			<Avatar url={author.avatarUrl} />
			<div className="self-center">
				<span className="text-slate-700 text-xl">{ author.login }</span>
			</div>
			<div className="Stiker flex" />
			<Goals />
			<Problem commits={data} />
		</article>
	);
};
