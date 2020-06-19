import React from "react";
import {connect} from "react-redux";

const CounterOne = ({counter}) => {
  return (
    <div>
      <p>Counter one = {counter}</p>
    </div>
  );
};

/*
* (state) - можно сразу вытащить нужный reducer через ({counterOne})
*/
const mapStateToProps = ({counterOne}) => ({
  counter: counterOne.counter
});

export default connect(mapStateToProps, null)(CounterOne);
