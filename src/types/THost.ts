import { RefObject } from "react";

// statistic 부분

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

// deploy부분

export interface IHostDeploy {
  data: any;
  hostName: string;
  imgUrl?: string;
  divRef: RefObject<HTMLDivElement>;
}

export type TProps = {
  message: string;
  data: Tdata;
};

export type TRequestData = {
  hostId: string;
  guestName: string;
  animal: number;
  emoji: number;
  color: number;
  first: number;
  now: number;
};

type TPartialdata = Omit<TRequestData, "first" | "now">;

export interface Tdata extends TPartialdata {
  hostName: string;
  title: string;
  first: string;
  now: string;
}
