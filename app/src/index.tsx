import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/hello';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(enthusiasm);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
