export type Tguest = {
  id: string;
  guestName: string;
  hostName: string;
};
// 게스트가 다른 결과 조회할 때 필요한 타입
type TguestResultData = {
  image: string;
  title: string;
  first: string;
  now: string;
};
export type TguestResult = {
  message: string;
  hostId: string;
  hostName: string;
  data: TguestResultData;
};
