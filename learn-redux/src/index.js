import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

// [ACTION (INCREMENT)]
// define name(type) of What to do
const increment = () => {
  return {
    type: 'INCREMENT',
  }
};
const decrement = () => {
  return {
    type: 'DECREMENT',
  }
};

// [REDUCER]
// check the action, DO action
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT': 
      return state - 1;
  }
};

// [STORE] -> GLOBALIZED STATE
let store = createStore(counter);
//displaying on console
store.subscribe(() => console.log(store.getState()));

// [DISPATCH]
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
