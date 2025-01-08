import Fastify from "fastify";
import { CommitWebHook, WebHookDetails } from './types';
import { WebClient } from "@slack/web-api";
import { config } from 'dotenv';

config({
	path: '.env',
});

const slackToken = process.env.SLACK_TOKEN as string;
const messageExp = /(?:^solved:\s)(?:\w+)\s(.+)$/;
const langExp = /(?:\s)(\w+)(?:\s)/;

const getSimpleDate = (date: string) =>
	new Date(date).toISOString().substring(5, 10);

const getSolvedLang = (message: string) => message.match(langExp)?.[1] ?? '등록되지 않은 언어';

const sliceMessageRatherThanScreenSize = (message: string) =>
	(message.length > 18)
		? message.substring(0, 18) + '..'
		: message;

const app = Fastify({ logger: true });
const slack = new WebClient(slackToken);

const getFirstCommit = (commits: CommitWebHook[]) => {
	if (commits.length < 1) return null;
	return commits[0];
}

app.post('/alg-study', async (request, reply) => {
	const details = request.body as WebHookDetails;
	const commitDetails = getFirstCommit(details.commits);
	if (!commitDetails) {
		slack.chat.postMessage({
			channel: '#주간-알고리즘-챌린지',
			text: "오류. 커밋 메시지가 없엉.",
		});
		return;
	}

	const lang = getSolvedLang(commitDetails.message);
	const simpleMessage = commitDetails.message.match(messageExp)?.[1] ?? '파싱 불가';

	slack.chat.postMessage({
		channel: '#주간-알고리즘-챌린지',
		blocks: [
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": `*${commitDetails.committer.name}* 님께서 새로운 문제를 등록하였습니다!\n*<https://${commitDetails.url}|문제 코드 보러가기>*\n*사용한 언어:${lang}*`
				}
			},
			{
				type: "divider",
			},
			{
				"type": "section",
				"text": {
					"type": "plain_text",
					"text": simpleMessage,
					"emoji": true
				}
			},
			{
				type: 'divider',
			},
			{
				"type": "section",
				"text": {
					"type": "plain_text",
					"text": `*<https://han-box.co.kr|문제 풀이 현황보기>*`,
					"emoji": true
				}
			}
		],
	});
	return;
});

app.listen({ port: 3001, host: '0.0.0.0' });
