//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import DefaultScreen from './DefaultScreen';
import NewUserWelcome from './newuserwelcome';
import ManualSteps from './manualsteps';
import YouLose from './youlose';
import PostLost from './postlost';
import BattleAnimation from './battleanimation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
