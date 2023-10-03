import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/errorPage';
import Home, { loader as homeLoader } from './pages/homePage';
import Issue, { loader as issueLoader } from './routes/issue';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, // This is our "root" element, through which all the other components will get passed
        errorElement: <ErrorPage />, // This is what loads when something breaks, or a 404 happens
        children: [
            {
                index: true, // This passes into the `Root` route's <Outlet>, https://reactrouter.com/en/main/route/route#index
                element: <Home />, // This is our "homepage" component that should load as the index page for the index route
                loader: homeLoader,
            },
            {
                path: 'issue/:issueId',
                element: <Issue />,
                loader: issueLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
