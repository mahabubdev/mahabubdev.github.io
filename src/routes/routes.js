import HomePage from '../pages/Index';
import AboutMe from '../pages/About';
import Notfound from '../pages/404';
import Blog from '../pages/Blog';
import Projects from '../pages/Projects';
import UnderConstructionPage from '../pages/UnderConstruction';


export const routers = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        component: AboutMe,
        exact: false
    },
    {
        path: '/projects',
        component: UnderConstructionPage,
        exact: false
    },
    {
        path: '/blog',
        component: UnderConstructionPage,
        exact: false
    },
    {
        path: '/*',
        component: Notfound,
        exact: false
    },
];