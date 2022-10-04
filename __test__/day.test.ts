import { getSprintStartedDate, getSprintEndDate } from '../src/apis';

describe('dayjs 함수 테스트', () => {
  it('오늘 날짜 객체를 반환한다.', () => {
    const started = getSprintStartedDate();
    console.log({ started });
    const ended = getSprintEndDate();
    console.log({ ended });
  });
});
