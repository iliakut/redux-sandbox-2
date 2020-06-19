import React from "react";
import {connect} from "react-redux";

const CounterTwo = ({counter}) => {
  return (
    <div>
      <p>Counter one = {counter}</p>
    </div>
  );
};

/*
* (state) - можно сразу вытащить нужный reducer через ({counterOne})
*/
const mapStateToProps = ({counterTwo}) => ({
  counter: counterTwo.counter
});

export default connect(mapStateToProps, null)(CounterTwo);
