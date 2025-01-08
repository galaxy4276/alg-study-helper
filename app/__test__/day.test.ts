import { getSprintStartedDate, getSprintEndDate } from '@src/utils/date';
import { getBeginningOfWeekDate } from '../src/utils/date';
import { getApiUrl } from '../src/apis';


describe('dayjs 함수 테스트', () => {
  it('이번 주의 시작날짜를 반환한다.', () => {
    const startOfWeeKDate = getBeginningOfWeekDate();
    console.log(`시작 날짜 Date 정보: ${startOfWeeKDate.toString()}`);
  });

  it('오늘 날짜 객체를 반환한다.', () => {
    const started = getSprintStartedDate();
    console.log({ started });
    const ended = getSprintEndDate();
    console.log({ ended });
  });

  it('api 요청 시 한주의 시작과 끝 간격으로 url 정보를 기입한다.', () => {
    console.log(
      getApiUrl('galaxy4276')
    );
  });
});
