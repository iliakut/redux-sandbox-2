import React from "react";
import {connect} from "react-redux";
import {onAdd, onRemove} from "../actions/counterTwoActions";

const CounterTwo = ({counter, onAdd, onRemove}) => {
  return (
    <div>
      <p>Counter one = {counter}</p>
      <button onClick={() => onAdd()}>add</button>
      <button onClick={() => onRemove()}>remove</button>
    </div>
  );
};

/*
* (state) - можно сразу вытащить нужный reducer через ({counterOne})
*/

const mapStateToProps = ({counterTwo}) => ({
  counter: counterTwo.counter
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
  onRemove
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterTwo);