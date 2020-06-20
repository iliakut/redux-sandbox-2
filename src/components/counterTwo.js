import React from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {onAdd, onRemove, onAddNumber, onDelayedAdd} from "../actions/counterTwoActions";
// import {COUNTER_TWO_ADD, COUNTER_TWO_REMOVE} from "../constants/actionTypesCounterOne";



const CounterTwo = () => {
  /*
  * useSelector будет производить сравнение (по умолчанию является строгим ===)
  * предыдущего значения результата селектора и текущего значения результата.
  * Если они отличаются, компонент будет вынужден повторно выполнить рендеринг.
  * С useSelector() возвращение нового объекта каждый раз по умолчанию будет вызывать повторный рендеринг.
  * если из стейта берется объект, то нужно исопльзовать shallowEqual, чтобы предотвратить это.
  *
  * в отличие от connect, хук useSelector не предотвращает повторный ререндер компонента,
  * когда перерисовывается родитель, даже если пропы не изменились.
  * Поэтому для оптимизации стоит использовать React.memo()
  */
  const counter = useSelector(state => state.counterTwo.counter);
  // const data = useSelector(state => state.counterTwo.data, shallowEqual); - будет обновлять компонент каждый раз
  const data = useSelector(state => state.counterTwo.data, shallowEqual); // использование shallowEqual
  /*
  * либо
  * const testOne = useSelector(state => state.counterTwo.data.testOne);
  * const testTwo = useSelector(state => state.counterTwo.data.testTwo);
  */

  /*
  * useDispatch - возвращает ссылку на dispatch функцию из Redux
  *
  * При передаче функции обратного вызова с использованием dispatch дочернему компоненту
  * рекомендуется его обернуть в useCallback,
  * const test = useCallback(() => dispatch(action()), [dispatch])
  * поскольку в противном случае дочерние компоненты могут перерендериваться без необходимости из-за измененной ссылки.
  */
  const dispatch = useDispatch();

  const addRandomNumber = () => {
    const rand = Math.floor(Math.random() * 10);
    dispatch(onAddNumber(rand));
  };

  return (
    <div>
      <p>Counter one = {counter}</p>
      <p>Data = {data.testOne} {data.testTwo}</p>
      <button onClick={() => dispatch(onAdd())}>add</button>
      <button onClick={() => dispatch(onRemove())}>remove</button>
      <button onClick={() => addRandomNumber()}>add random</button>
      <button onClick={() => dispatch(onDelayedAdd(2000))}>add delayed</button>
    </div>
  );
};

export default CounterTwo;
