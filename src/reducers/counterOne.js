import * as types from "../constants/actionTypesCounterOne";

const initialState = {
  counter: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        counter: state.counter + 1
      };
    case types.REMOVE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}