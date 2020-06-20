import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";

const render = (RootComponent) => {
  ReactDOM.render(
    <Provider store={store}>
      <RootComponent />
    </Provider>,
    document.getElementById('root')
  );
};

render(App);


if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
