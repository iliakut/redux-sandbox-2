import {combineReducers} from "redux";
import counterOne from "./counterOne";
import counterTwo from "./counterTwo";

/*
* combineReducers - объединяет редьюсеры в общий объект,
* при этом обращение к стейту будет state.reducer_1 и т.д.
*
* counterOne, counterTwo взяты для теста
* при этом код в actions, actionTypes может дублироваться
*/

export default combineReducers({
  counterOne,
  counterTwo
});
