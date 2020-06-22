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

export default function () {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
