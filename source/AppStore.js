import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import reducers from './reducers/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];
const enhancers = [];

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(reducers, composedEnhancers);

export default function AppStore(props) {
  const { children } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
