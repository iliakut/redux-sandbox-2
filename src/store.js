import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers/reducer";

/*
* 1. store создается с помощью createStore, в него передается reducer
* 2. у createStore есть параметры:
*   (reducer, initialState, enhancer)
*   enhancer - что-то, что училивает работу store
*   если enhancers несколько, то нужно использовать compose для их склеивания
*   window.__REDUX_DEVTOOLS_EXTENSION__ - для работы расширения redux в devtools
*
*
*/

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
