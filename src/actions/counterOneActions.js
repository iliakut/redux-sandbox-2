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

export const onDelayedAdd = (timeout) => (dispatch) => {
  /*
  * вмест возврата объекта с type и payload
  * нужно вернуть функцию, которая принимает dispatch
  * и уже в ней сделать dispatch({ type... })
  */
  setTimeout(() => dispatch({
    type: actionTypes.COUNTER_ONE_DELAYED_ADD,
  }), timeout);
};

export const fetchAsync = (id) => async (dispatch) => {
  const resp = await fetch(`https://swapi.dev/api/planets/${id}`);
  const data = await resp.json();
  const name = data.name;
  return dispatch({
    type: actionTypes.COUNTER_ONE_ASYNC_GET_NAME,
    payload: name
  })
};