import React from 'react';
import { nanoid } from 'nanoid';

import { TableItem } from './TableItem';
import { GithubCommitResponse } from '@src/apis/types';
import { useUserCommitList } from '../Profile/context/UserCommitListContext';


export const Problem: React.FC = () => {
	const commitList = useUserCommitList();
	const slicedCommits = commitList.slice(0, 5);

	return (
		<section className="overflow-hidden">
			<h3 className="text-slate-800 font-semibold pb-2.5">Current solved</h3>
			<div className="shadow-md">
				{
					slicedCommits
						.map((commit: GithubCommitResponse) => <TableItem key={nanoid()} commit={commit} />)
				}
			</div>
		</section>
	);
};
