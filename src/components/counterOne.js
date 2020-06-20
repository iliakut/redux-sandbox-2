import React from "react";
import {connect} from "react-redux";
import {onAdd, onRemove, onAddNumber, onDelayedAdd, fetchAsync} from "../actions/counterOneActions";
// import {COUNTER_ONE_ADD, COUNTER_ONE_REMOVE} from "../constants/actionTypesCounterOne";

const CounterOne = ({counter, name, onAdd, onRemove, onAddNumber, onDelayedAdd, fetchAsync}) => {
  const addRandomNumber = () => {
    const rand = Math.floor(Math.random() * 10);
    onAddNumber(rand);
  };

  return (
    <div>
      <p>Counter one = {counter}</p>
      <p>async test: {name}</p>
      <button onClick={() => onAdd()}>add</button>
      <button onClick={() => onRemove()}>remove</button>
      <button onClick={() => addRandomNumber()}>add random</button>
      <button onClick={() => onDelayedAdd(1000)}>add delayed</button>
      <button onClick={() => fetchAsync(counter)}>test async dispatch</button>
    </div>
  );
};

/*
* (state) - можно сразу вытащить нужный reducer через ({counterOne})
*/
const mapStateToProps = ({counterOne}) => ({
  counter: counterOne.counter,
  name: counterOne.name
});

/*
* доступны несколько вариантов mapDispatchToProps
* 1. когда это объект
* 2. когда это функция
*
* под капотом объект когда мы передаем объект
* это работает через bindActionCreators
*  return bindActionCreators(actions, dispatch);
*/


// 1 варианит - объект
const mapDispatchToProps = {
  onAdd,
  onRemove,
  onAddNumber,
  onDelayedAdd,
  fetchAsync,
};

/*
// 2.вариант - функция
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({ type: COUNTER_ONE_ADD }),
    onRemove: () => dispatch({ type: COUNTER_ONE_REMOVE }),
  }
};
*/

export default connect(mapStateToProps, mapDispatchToProps)(CounterOne);
