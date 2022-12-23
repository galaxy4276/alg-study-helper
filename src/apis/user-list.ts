/**
 * @desc 각 사용자의 branch 이름을 기준으로 구성된 사용자 리스트
 */
const userList = [
  'galaxy4276',
  'H4PuM',
  'Antidote21',
  'ChanSuy',
  'minesp3164',
  'pandora2948',
] as const;


export type userListType =
  'galaxy4276' |
  'H4PuM' |
  'Antidote21' |
  'ChanSuy' |
  'minesp3164' |
  'pandora2948';

export const userNameList = [
  'galaxy4276',
  'H4PuM',
  'Antidote21',
  'ChanSuy',
  'minesp3164',
  'pandora2948',
];

export const algStudyUserInfo = {
  'galaxy4276': 2,
  'H4PuM': 2,
  'Antidote21': 2,
  'ChanSuy': 3,
  'minesp3164': 2,
  'pandora2948': 1,
};


export default userList;
