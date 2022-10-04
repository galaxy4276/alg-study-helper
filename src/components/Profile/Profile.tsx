import React from 'react';

import { Problem } from '@src/components/Problem/Problem';
import { Goals } from './Goals';
import { Avatar } from './Avatar';
import { useCommittedListContext } from '@src/hooks/use-committed-list.hooks';


export const Profile: React.FC = () => {
	const { factory } = useCommittedListContext();

	console.log(factory.getUserCommittedList('ChanSuy'));

	return (
		<article className="my-5 p-5 shadow-md flex flex-col w-full">
			<Avatar/>
			<div className="self-center">
				<span className="text-slate-700 text-xl">minesp3164</span>
			</div>
			<div className="Stiker flex" />
			<Goals />
			<Problem />
		</article>
	);
};
