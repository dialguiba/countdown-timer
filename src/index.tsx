import React from 'react';
import ReactDOM from 'react-dom';
import { CountdownTimerApp } from './CountdownTimerApp';

import "./styles/base/_base.scss"
import "./styles/base/_settings.scss"

ReactDOM.render(
  <React.StrictMode>
    <CountdownTimerApp />
  </React.StrictMode>,
  document.getElementById('root')
);