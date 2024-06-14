import { Dispatch } from "react";

type Action = {type : 'PLUS'} | {type : 'MINUS'};

export interface ReducerProps {
    state: number;
    dispatch: Dispatch<Action>;
  }