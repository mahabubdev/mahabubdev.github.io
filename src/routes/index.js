import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import { routers } from './routes';

function Routers () {
    const currentEnv = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : undefined;

    // const location = useLocation();
    // const {history, browserHistory} = useHistory();
    // browserHistory
    const browserHistory = useHistory();


    return (
        <BrowserRouter history={browserHistory} basename={currentEnv ? `/` : null}>
            <Layout>
                <Switch>
                    {
                        routers.map(rt => (
                            <Route 
                                exact={rt.exact} key={rt.path}
                                path={rt.path} component={rt.component}
                            />
                        ))
                    }
                </Switch>
            </Layout>
        </BrowserRouter>
    )
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

export default Routers;