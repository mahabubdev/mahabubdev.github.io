import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


(function(){
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
    // REMOVE THIS - just showing the redirect route in the UI
    // document.body.setAttribute('message', 'This page was redirected by 404.html, from the route: ' + redirect);
  }
  else {
    // REMOVE THIS - just showing the redirect route in the UI
    // document.body.setAttribute('message', 'This page was loaded directly from the index.html file');
  }
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
