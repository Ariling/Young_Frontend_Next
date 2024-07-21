import { RefObject } from "react";

export type Tstatistic = {
  index: number;
  percent: number;
};

export interface Istatistics {
  animal: Array<Tstatistic>;
  emoji: Array<Tstatistic>;
  color: Array<Tstatistic>;
  first: Array<Tstatistic>;
  now: Array<Tstatistic>;
}

export interface IHostDeploy {
  data: any;
  hostName: string;
  imgUrl: string;
  divRef: RefObject<HTMLDivElement>;
}
