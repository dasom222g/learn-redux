import { DECREASE, INCREASE, SET_STEP } from "../modules/counter";

export interface counterActionType {
  type: typeof INCREASE | typeof DECREASE | typeof SET_STEP
  step?: number
}

export interface counterStateType {
  count: number,
  step: number
}