import { createBrowserRouter } from 'react-router-dom';
import Home from "../components/pages/Home";
import About from '../components/pages/About';
import Admin from '../components/pages/Admin';
import Events from '../components/pages/Events';
import CreateEvent from '../components/pages/CreateEvent';
import Layout from '../layout/Layout';
import Profile from '../components/auth0/Profile';
import { AuthenticationGuard } from '../components/auth0/AuthenticationGuard';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AuthenticationGuard component={About} />,
            },
            {
                path: "/admin",
                element: <AuthenticationGuard component={Admin} />,
            },
            {
                path: "/profile",
                element: <AuthenticationGuard component={Profile} />,
            },
            {
                path: "/events",
                element: <AuthenticationGuard component={Events} />,
            },
            {
                path: "/create-event",
                element: <AuthenticationGuard component={CreateEvent} />,
            },
        ]
    },
]);

/* export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ]
    },
]); */