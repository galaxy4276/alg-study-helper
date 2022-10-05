import React from 'react';
import { GithubCommitResponse } from '@src/apis/types';


const langs = [
	'c',
	'c++',
	'java',
	'rust',
	'python',
] as const;

interface TableItemProps {
	commit: GithubCommitResponse;
}

const getSimpleDate = (date: string) =>
	new Date(date).toISOString().substring(0, 10);

const getSolvedLang = (message: string) =>
	langs.find(lang => message.toLowerCase().includes(lang));

const sliceMessageRatherThanScreenSize = (message: string) =>
	(message.length > 10)
		? message.substring(0, 10) + '..'
		: message;

export const TableItem: React.FC<TableItemProps> = ({ commit }) => {
	const committedDate = getSimpleDate(commit.commit.author.date);
	const lang = getSolvedLang(commit.commit.message) || '?';
	const solutionMatcher = sliceMessageRatherThanScreenSize(commit.commit.message)
		.match(/([\s{1,1}|[a-zA-Z가-힣0-9]+\s{1,1})/);

	const onClickSolvedCol = () =>
		window.open(commit.htmlUrl);
	

	return (
		<div
			onClick={onClickSolvedCol}
			className="
				flex justify-between py-1.5 px-2 table-item whitespace-nowrap text-slate-600
				cursor-pointer hover:bg-slate-300 transition delay-200
			"
		>
			<div className="flex items-center">
				<span>
					{ solutionMatcher && solutionMatcher[0] || '알 수 없음' } ({ lang })
				</span>
				<i className="fa-brands fa-python mx-1"></i>
			</div>

			<div className="flex items-center">
			<span className="hidden xl:block">문제 해결 날짜:&nbsp;</span>
			<span>
				{ committedDate }
			</span>
			</div>

		</div>
	)
};
