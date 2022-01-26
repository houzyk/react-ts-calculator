import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root:HTMLElement | null =  document.getElementById('root');
if (root) ReactDOM.render(<App />, root);
