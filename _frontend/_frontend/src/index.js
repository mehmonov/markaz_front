import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Elements from './Redux/Reducers/Elements';

const enhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const eskiDispatch = store.dispatch;

  store.dispatch = (action) => {
    if (typeof action === 'string') {
      eskiDispatch({ type: action });
    } else {
      eskiDispatch(action);
    }
  }
  return store
}

const store = createStore(combineReducers({Elements}),enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);