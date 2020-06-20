import * as actionTypes from "../constants/actionTypesCounterTwo"

export const onAdd = () => ({
  type: actionTypes.COUNTER_TWO_ADD
});

export const onRemove = () => ({
  type: actionTypes.COUNTER_TWO_REMOVE
});

export const onAddNumber = (number) => ({
  type: actionTypes.COUNTER_TWO_ADD_NUMBER,
  payload: number
});

export const onDelayedAdd = (timeout) => (dispatch) => {
  /*
  * вмест возврата объекта с type и payload
  * нужно вернуть функцию, которая принимает dispatch
  * и уже в ней сделать dispatch({ type... })
  */
  setTimeout(() => dispatch({
    type: actionTypes.COUNTER_TWO_DELAYED_ADD,
  }), timeout);
};