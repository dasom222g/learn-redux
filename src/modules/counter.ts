import { counterActionType, counterStateType } from "../lib/type";

// action type 정의
export const SET_STEP = "counter/SET_STEP" as const;
export const INCREASE = "counter/INCREASE" as const;
export const DECREASE = "counter/DECREASE" as const;

// action 생성자 함수
// string타입이 아닌 실제 값을 타입으로 지정해서 타입 범위 좁힘
export const setStep = (step: number) => ({ type: SET_STEP, step });
export const increaseAction = () => ({ type: INCREASE });
export const decreaseAction = () => ({ type: DECREASE });

// initial data
const initialState: counterStateType = {
  count: 0,
  step: 1,
};

// reducer
export const counter = (state: counterStateType = initialState, action: counterActionType) => {
  switch (action.type) {
    case SET_STEP:
      return { ...state, step: action.step };
    case INCREASE:
      return { ...state, count: state.count + state.step };
    case DECREASE:
      return { ...state, count: state.count - state.step };
    default:
      return state;
  }
};
