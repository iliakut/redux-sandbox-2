import * as types from "../constants/actionTypesCounterTwo"

const initialState = {
  counter: 2,
  data: {
    testOne: 'one',
    testTwo: 'two'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.COUNTER_TWO_ADD:
      return {
        ...state,
        counter: state.counter + 1
      };
    case types.COUNTER_TWO_REMOVE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case types.COUNTER_TWO_ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case types.COUNTER_TWO_DELAYED_ADD:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}