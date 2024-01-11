// action type 정의
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASESTEP = "counter/INCREASESTEP" as const;

// action 생성자 함수
// string타입이 아닌 실제 값을 타입으로 지정해서 타입 범위 좁힘`
export const increaseAction = () => ({ type: INCREASE });
export const decreaseAction = () => ({ type: DECREASE });
export const increaseStepAction = (step: number) => ({
  type: INCREASESTEP,
  payload: step,
});

// reducer

export const increase = (
  state: number,
  action: typeof INCREASE | typeof DECREASE | typeof INCREASESTEP
) => {
  switch (action) {
  }
};
