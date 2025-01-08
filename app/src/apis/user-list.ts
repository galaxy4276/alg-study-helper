/**
 * @desc 각 사용자의 branch 이름을 기준으로 구성된 사용자 리스트
 */
const userList = [
  'galaxy4276',
  'heychi',
  'mjmj1',
  'west-eastH',
  'hyunjung2222',
] as const;


export type userListType = typeof userList[number];

export const algStudyUserInfo: Record<userListType, number> = {
  galaxy4276: 3,
  heychi: 3,
  'west-eastH': 3,
  mjmj1: 3,
  hyunjung2222: 3,
};

export default userList;
