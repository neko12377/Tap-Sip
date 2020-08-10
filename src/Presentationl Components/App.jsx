/* eslint-disable no-underscore-dangle */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Route from '../Route';
import reducer from '../Reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
console.log('%cHere', 'color: lightcyan');
console.log(store);
console.log('%cHere', 'color: lightcyan');

export default function () {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
