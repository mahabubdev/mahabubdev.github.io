// import logo from './logo.svg';
import './App.css';
import Routers from './routes';

function App() {
  return <Routers />
}


// gh-pages redirect handle
(function(){
  var redirect = window.sessionStorage.redirect;
  delete window.sessionStorage.redirect;
  if (redirect && redirect !== window.location.href) {
    // history.replaceState(null, null, redirect);
    window.history.replaceState(null, null, redirect);
    // REMOVE THIS - just showing the redirect route in the UI
    // document.body.setAttribute('message', 'This page was redirected by 404.html, from the route: ' + redirect);
  }
  else {
    // REMOVE THIS - just showing the redirect route in the UI
    // document.body.setAttribute('message', 'This page was loaded directly from the index.html file');
  }
})();

export default App;
