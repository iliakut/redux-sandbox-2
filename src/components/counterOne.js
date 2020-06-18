import React from "react";
import {connect} from "react-redux";
import counterOne from "../reducers/counterOne";

const CounterOne = ({counterOne}) => {
  console.log(counterOne)
  return (
    <div>
      Counter one
    </div>
  );
};

/*
* (state) - можно сразу вытащить нужный reducer через ({counterOne})
*/
const mapStateToProps = ({counterOne}) => ({
  counterOne
});

export default connect(mapStateToProps, null)(CounterOne);
