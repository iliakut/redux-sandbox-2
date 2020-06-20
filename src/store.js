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
*   см. onDelayedAdd, fetchAsync в actions
*
*/

const store = createStore(
  reducer,
  compose (
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  /*
  * заменяет исходный reducer на reducer который поддерживает hot
  * позволяет изменять код редюсера и не перезагружать страницу (не терять данные)
  */
  module.hot.accept('./reducers/reducer', () => store.replaceReducer(reducer))
}

export default store;

/*
* TODO
*  1. hot reload for redux
*/