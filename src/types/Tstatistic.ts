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
