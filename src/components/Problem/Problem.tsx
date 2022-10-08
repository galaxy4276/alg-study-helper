import React from 'react';
import { TableItem } from './TableItem';
import './styles.css';
import { GithubCommitResponse } from '@src/apis/types';
import { nanoid } from 'nanoid';


interface ProblemProps {
	commits: GithubCommitResponse[];
}

export const Problem: React.FC<ProblemProps> = ({ commits }) => {
	const slicedCommits = commits.slice(0, 5);

	return (
		<section className="overflow-hidden">
			<h3 className="text-slate-800 font-semibold pb-2.5">Current solved</h3>
			<div className="shadow-md">
				{
					slicedCommits
						.map(commit => <TableItem key={nanoid()} commit={commit} />)
				}
			</div>
		</section>
	);
}
