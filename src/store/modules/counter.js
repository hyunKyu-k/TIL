// // 액션과 리듀서를 하나의 파일로 관리 --> ducks 패턴
// // 카운터 관련 상태 로직

// //* 액션 타입 정의
// const INCREMENT = "counter/INCREMENT";
// const DECREMENT = "counter/DECREMENT";

// //* 액션 생성함수

// export const increment = () => ({
//   type: INCREMENT,
// });

// export const decrement = () => ({
//   type: DECREMENT,
// });

// //* 모듈의 초기상태 정의

// const initialState = {
//   number: 0,
// };

// //* 리듀서

// export default function reducer(state = initialState, action) {
//   //* 액션타입에 따라 변화된 상태반환
//   switch (action.type) {
//     case INCREMENT:
//       return { number: state.number + 1 };
//     case DECREMENT:
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// }

//! redux-actions "createAction && handleAction" 사용하기

import { createAction, handleAction, handleActions } from "redux-actions";

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  number: 0,
};

//* handleActions 첫번째 파라미터는 액션을 처리하는 함수로 이루어진 객체
//* 두번째 파라미터는 초기상태

export default handleActions(
  {
    [INCREMENT]: (state, action) => {
      return { nunber: state.number + 1 };
    },
    [DECREMENT]: (state, action) => {
      return { number: state.number - 1 };
    },
  },
  initialState
);
