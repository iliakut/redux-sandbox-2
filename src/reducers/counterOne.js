import * as types from "../constants/actionTypesCounterOne";

const initialState = {
  counter: 1,
  name: '',
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.COUNTER_ONE_ADD:
      return {
        ...state,
        counter: state.counter + 1
      };
    case types.COUNTER_ONE_REMOVE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case types.COUNTER_ONE_ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case types.COUNTER_ONE_DELAYED_ADD:
      return {
        ...state,
        counter: state.counter + 1
      };
    case types.COUNTER_ONE_ASYNC_GET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case types.COUNTER_ONE_ASYNC_LOADING_GET_NAME:
      return {
        ...state,
        loading: action.payload
      };
    case types.COUNTER_ONE_ASYNC_ERROR_GET_NAME:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}