import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import { routers } from './routes';

function Routers () {
    const currentEnv = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : undefined;

    return (
        <BrowserRouter basename={currentEnv ? `/` : null}>
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

export default Routers;