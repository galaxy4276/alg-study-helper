import React from 'react';
import { GithubCommitResponse } from '@src/apis/types';
import { LangIcon } from '@src/components/Problem/LangIcon';


const langs = [
	'c',
	'c++',
	'java',
	'rust',
	'python',
	'kotlin',
	'sql',
] as const;

interface TableItemProps {
	commit: GithubCommitResponse;
}

const messageExp = /(?:^solved:\s)(?:\w+)\s(.+)$/;
const langExp = /(?:\s)(\w+)(?:\s)/;

const getSimpleDate = (date: string) =>
	new Date(date).toISOString().substring(5, 10);

const getSolvedLang = (message: string) => {
	const langName = message.match(langExp)?.[1];
	if (!langName) return '';
	return langs.find(lang => lang.toLowerCase().includes(langName)) || '';
};

const sliceMessageRatherThanScreenSize = (message: string) =>
	(message.length > 18)
		? message.substring(0, 18) + '..'
		: message;

const validateSolution = (message: string) => {
	const expResult = message.match(messageExp)?.[1];
	if (!expResult) return '알 수 없음';
	return sliceMessageRatherThanScreenSize(expResult);
}


export const TableItem: React.FC<TableItemProps> = ({ commit }) => {
	const committedDate = getSimpleDate(commit.commit.author.date);
	const lang = getSolvedLang(commit.commit.message);
	const solution = validateSolution(commit.commit.message);

	const onClickSolvedCol = () =>
		window.open(commit.htmlUrl);

	return (
		<div
			onClick={onClickSolvedCol}
			className="
			  py-1.5 px-2 item-layout text-slate-600
				cursor-pointer text-sm xl:text-base table-item__hover
			"
		>
			<div className="flex items-center">
				<span>
					{ solution || '알 수 없음' }

				</span>
					<div className="px-1 shadow-sm">
						<LangIcon lang={lang} />
					</div>
			</div>

			<span>
				{ committedDate }
			</span>
		</div>
	);
};
