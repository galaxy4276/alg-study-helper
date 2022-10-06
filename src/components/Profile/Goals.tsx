import React from 'react';
import { algStudyUserInfo } from '@src/apis/user-list';
import { getFillMeaninglessArray } from '@src/utils/mock';


interface GoalProps {
	solvedCount: number;
	username: keyof typeof algStudyUserInfo;
}

export const Goals: React.FC<GoalProps> = ({ solvedCount, username }) => {
	const userSolutionCount = algStudyUserInfo[username];
	const todoCount = solvedCount - userSolutionCount;

	return(
		<div>
			<b className="text-slate-700 py-3">
				remains:&nbsp;
				{
					todoCount < 0
						? Math.abs(todoCount)
						: 0
				}
			</b>
			<section className="flex text-slate-900 font-bold text-xl py-2.5 gap-x-1">
				{getFillMeaninglessArray(solvedCount)
					.map(() =>
						<i className="fa-solid fa-circle-check text-[#4ABB38]"/> )
				}
				{
					todoCount < 0
						? getFillMeaninglessArray(Math.abs(todoCount))
							.map(() =>
								<i className="fa-solid fa-circle-xmark text-[#CB3535]"/>)
						: null
				}
			</section>
		</div>
	)
};

