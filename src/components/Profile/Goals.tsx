import React from 'react';
import { nanoid } from 'nanoid';

import { algStudyUserInfo } from '@src/apis/user-list';
import { getFillMeaninglessArray } from '@src/utils/mock';
import { useCommittedListContext } from '@src/hooks/use-committed-list.hooks';


interface GoalProps {
	username: keyof typeof algStudyUserInfo;
}

export const Goals: React.FC<GoalProps> = ({ username }) => {
	const { factory } = useCommittedListContext();
	const userSolutionCount = algStudyUserInfo[username];
	const solvedCount: number = factory.getUserSolvedCount(username);
	const todoCount = solvedCount - userSolutionCount;
	const remainsCount: number = todoCount < 0 ? Math.abs(todoCount) : 0;

	return(
		<div>
			<b className="text-slate-700 py-3">
				remains:&nbsp;{remainsCount}
			</b>
			<section className="flex text-slate-900 font-bold text-xl py-2.5 gap-x-1">
				{getFillMeaninglessArray(solvedCount)
					.map(() =>
						<i key={nanoid()} className="fa-solid fa-circle-check text-[#4ABB38]"/>
					)
				}
				{
					todoCount < 0
						? getFillMeaninglessArray(Math.abs(todoCount))
							.map(() =>
								<i key={nanoid()} className="fa-solid fa-circle-xmark text-[#CB3535]"/>)
						: null
				}
			</section>
		</div>
	)
};
