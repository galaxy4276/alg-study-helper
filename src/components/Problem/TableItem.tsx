import React from 'react';
import { GithubCommitResponse } from '@src/apis/types';
import { LangIcon } from '@src/components/Problem/LangIcon';


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

const removeMessageTag = (message: string) => {
	if (message == '알 수 없음') return message;
	if (message.includes(':')) {
		const index = message.indexOf(':');
		return message.slice(index + 1, message.length - 1);
	}
	return message.slice(1, message.length - 1);
};

const validateSolution = (message: string) => {
	const regex = /(?:\[)([\w가-힣0-9\s]+)(?:\])/g;
	const regexArray = message.match(regex) || ['알 수 없음'];
	return removeMessageTag(regexArray[0]);
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
				flex justify-between py-1.5 px-2 table-item whitespace-nowrap text-slate-600
				cursor-pointer hover:bg-slate-300 transition delay-200
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
	)
};
