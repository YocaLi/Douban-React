import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, } from 'react-router'
import Routes from './Routes.js';

import './assets/css/reset.css';
import './assets/font/iconfont.css'
import './assets/js/resize.js';

// 这样也行
// require('./assets/js/resize.js');

ReactDOM.render(
  <Routes history={browserHistory}/>,
  document.getElementById('root')
);
