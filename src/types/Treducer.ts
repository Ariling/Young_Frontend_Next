import { Dispatch } from "react";

export type Action = { type: "PLUS" } | { type: "MINUS" };
export type SAction = { type: "CHANGE"; payload: string } | { type: "RESET" };

export interface ReducerProps {
  state: number;
  dispatch: Dispatch<Action>;
}

export interface IstringReducder {
  state: string;
  dispatch: Dispatch<SAction>;
}

export function reducer(state: number, action: Action) {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      if (state === 1) {
        return state;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
}

export function inputReducer(state: string, action: SAction) {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    case "RESET":
      return "";
  }
}
