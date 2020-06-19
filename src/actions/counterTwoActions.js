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