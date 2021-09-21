import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostReq from './PostReq';
import PutReq from './PutReq';
import DelReq from './DelReq';
import ErrorReq from './ErrorReq';
import CustomHook from './CustomHook';

ReactDOM.render(
  <React.StrictMode>
    <CustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);
