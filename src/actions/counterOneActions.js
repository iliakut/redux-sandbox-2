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
