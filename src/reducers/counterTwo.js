import * as types from "../constants/actionTypesCounterTwo"

const initialState = {
  counter: 2
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