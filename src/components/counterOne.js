import React from "react";
import {connect} from "react-redux";
import {onAdd, onRemove} from "../actions/counterOneActions";

const CounterOne = ({counter, onAdd, onRemove}) => {
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
const mapStateToProps = ({counterOne}) => ({
  counter: counterOne.counter
});

const mapDispatchToProps = {
  onAdd,
  onRemove
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterOne);
