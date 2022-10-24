import React from 'react';
import { GithubCommitResponse } from '@src/apis/types';
import { LangIcon } from '@src/components/Problem/LangIcon';


const langs = [
	'c',
	'c++',
	'java',
	'rust',
	'python',
	'kotlin'
] as const;

interface TableItemProps {
	commit: GithubCommitResponse;
}

const getSimpleDate = (date: string) =>
	new Date(date).toISOString().substring(5, 10);

const getSolvedLang = (message: string) => {
	const solutionNameEndIndex = message.indexOf(']');
	if (solutionNameEndIndex == -1) return '';
	const langMessage = message.slice(solutionNameEndIndex + 1, message.length);
	return langs.find(lang => langMessage.toLowerCase().includes(lang));
};

const sliceMessageRatherThanScreenSize = (message: string) =>
	(message.length > 15)
		? message.substring(0, 15) + '..'
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
	const startIndex = message.indexOf('[');
	const endIndex = message.indexOf(']');
	if (startIndex === -1 && endIndex === -1)
		return sliceMessageRatherThanScreenSize(
			removeMessageTag('알 수 없음'),
		);
	return sliceMessageRatherThanScreenSize(
		removeMessageTag(message.slice(startIndex, endIndex)),
	);
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
	)
};
