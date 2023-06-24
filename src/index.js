import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import {mainStyle} from "./index.css"
import {CSSTransition} from 'react-transition-group';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);