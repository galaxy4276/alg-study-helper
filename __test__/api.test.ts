import { getAllUserCommittedList, getUserCommittedList } from '../src/apis';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import CommittedListMapper from '../src/apis/Mapper';

describe('Github API 테스트', () => {

  it('Api 요청이 성공적으로 응답받는다.', async () => {
    const res = await getUserCommittedList('galaxy4276');
    expect(res.status).toBe(200);
  });

  it('유저 각각의 브랜치 커밋 항목을 받아 가공후 반환한다.', async () => {
    const commitList = await getAllUserCommittedList();
    const jsonSampleData = JSON.stringify(commitList, null, 2);
    writeFileSync(resolve(__dirname, 'sample.json'), jsonSampleData);

    const mapper = new CommittedListMapper(commitList);
    console.log(mapper.getUserCommittedList('galaxy4276'));
  })
});
