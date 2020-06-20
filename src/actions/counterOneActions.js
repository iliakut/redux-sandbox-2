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
  /*
  * асинхронный action
  * функция, которая возвращает функцию
  * которая делает dispatch, запросы и т.п.
  * с помощью dispatch можно вызывать другие actions (fetchAsyncError например)
  *
  */
  dispatch(fetchAsyncError(false));
  dispatch(fetchAsyncLoading(true));
  try {
    const resp = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = await resp.json();
    const name = data.name;
    dispatch({
      type: actionTypes.COUNTER_ONE_ASYNC_GET_NAME,
      payload: name
    });
  }
  catch (e) {
    dispatch({
      type: actionTypes.COUNTER_ONE_ASYNC_GET_NAME,
      payload: 'error getting name'
    });
    dispatch(fetchAsyncError(true))
  }
  dispatch(fetchAsyncLoading(false));
};

export const test = () => (dispatch) => {
  /*
  * пример синхронного action, который вызывает другой action
  */
  dispatch(fetchAsyncLoading(true))
};

const fetchAsyncLoading = (val) => ({
  type: actionTypes.COUNTER_ONE_ASYNC_LOADING_GET_NAME,
  payload: val
});

const fetchAsyncError = (val) => ({
  type: actionTypes.COUNTER_ONE_ASYNC_ERROR_GET_NAME,
  payload: val
});