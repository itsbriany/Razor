import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Hello from './containers/hello';
import './index.css';
import { enthusiasm } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(enthusiasm);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
