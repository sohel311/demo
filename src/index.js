import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "./Component/header";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux'
import log_check from './Reducers/log';
import Stud from "./Reducers/Stud_Data";
const store = createStore(combineReducers({log_check,Stud}));

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header/>
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
