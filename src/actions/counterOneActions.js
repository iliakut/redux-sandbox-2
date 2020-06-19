import * as actionTypes from "../constants/actionTypesCounterOne"

export const onAdd = () => ({
  type: actionTypes.COUNTER_ONE_ADD
});

export const onRemove = () => ({
  type: actionTypes.COUNTER_ONE_REMOVE
});

export const onAddNumber = (number) => ({
  type: actionTypes.COUNTER_ONE_ADD_NUMBER,
  payload: number
});

export const onDelayedAdd = (tymeout) => (dispatch) => {
  /*
  * вмест возврата объекта с type и payload
  * нужно вернуть функцию, которая принимает dispatch
  * и уже в ней сделать dispatch({ type... })
  */
  setTimeout(() => dispatch({
    type: actionTypes.COUNTER_ONE_DELAYED_ADD,
  }), tymeout);
};