
import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/main.css';
import './static/images/Searchs_130.png';
import './static/js/main.js';
// import './static/js/extention/choices.js';
// import './static/js/extention/custom-materialize.js';
// import './static/js/extention/flatpickr.js';
// import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
