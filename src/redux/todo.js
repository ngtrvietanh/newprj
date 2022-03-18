// const initialState = {
//   items: []
// };

// const COUNTER_CHANGE = "COUNTER_CHANGE";

// export const changeCount = (count) => ({
//   type: COUNTER_CHANGE,
//   payload: count
// });
// export const changeCount = (count) => ({
//   type: COUNTER_CHANGE,
//   payload: count
// });

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case COUNTER_CHANGE:
//       return {
//         ...state,
//         items: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

const initialState = {
  count: 0,
};

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export function increse(value) {
  console.log('====>>>value', value);
  return {
    type: INCREASE,
    payload: value,
  };
}
export const decrese = value => ({
  type: DECREASE,
  payload: value,
});

const todoReducer = (state = initialState, action) => {
  console.log('====>>>todoReducer', action);
  switch (action.type) {
    case INCREASE: {
      console.log('====>>>actionreducer', action);
      return {
        count: action.payload,
      };
    }
    case DECREASE:
      return {
        count: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
