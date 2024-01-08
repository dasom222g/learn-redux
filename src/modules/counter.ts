// action type 정의
const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const
const INCREASE_BY = 'counter/INCREASE_BY' as const

// action 생성자 함수
// string타입이 아닌 실제 값을 타입으로 지정해서 타입 범위 좁힘`
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increase_by = (step: number) => ({ type: INCREASE_BY, payload: step })

// reducer
export const increaseTest = () => { }