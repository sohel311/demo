import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "./Component/header";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import log_check from './Reducers/log';

const store = createStore(log_check);
ReactDOM.render(
  <React.StrictMode>

      <BrowserRouter>

              <Header></Header>
          <Provider store={store}>
              <App/>
          </Provider>

      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
