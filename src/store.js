import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducers/reducer";
import thunkMiddleware from "redux-thunk"

/*
* 1. store создается с помощью createStore, в него передается reducer
* 2. у createStore есть параметры:
*   (reducer, initialState, enhancer)
*   enhancer - что-то, что училивает работу store
*   если enhancers несколько, то нужно использовать compose для их склеивания
*   window.__REDUX_DEVTOOLS_EXTENSION__ - для работы расширения redux в devtools
*
* 3. thunkMiddleware (код в 14 строк)
*   позволяет делать асинхронные actions
*   см. onDelayedAdd
*
*/

export const store = createStore(
  reducer,
  compose (
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
