/**
 * @desc 각 사용자의 branch 이름을 기준으로 구성된 사용자 리스트
 */
const userList = [
  'galaxy4276',
  'Antidote21',
  'ChanSuy',
  'minesp',
  'pandora2948',
] as const;


export type userListType =
  'galaxy4276' |
  'Antidote21' |
  'ChanSuy' |
  'minesp' |
  'pandora2948';


export default userList;
