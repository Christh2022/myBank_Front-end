// src/router.tsx
import { createBrowserRouter, Navigate } from 'react-router';
import { ErrorBoundary } from '../utils/ErrorBoundary';
import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Expenses from '../Pages/Expenses';
import NotFound from '../Pages/NotFound';
import { requireAuth } from '../utils/Auth';
import { loginAction } from '../Pages/Login/LoginAction';
import { Login } from '../Pages/Login/Login';
import { registerAction } from '../Pages/Register/RegisterAction';
import { Register } from '../Pages/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace />,
    },
    {
        path: '/',
        loader: requireAuth,
        errorElement: <ErrorBoundary />,
        children: [
        { path: 'home', element: <Home /> },
        { path: 'comptes', element: <Category /> },
        { path: 'transactions', element: <Expenses /> },
        ],
    },
    {
        path: '/Login',
        element: <Login />,
        action: loginAction,
    },

    {
        path: '/register',
        element: <Register />,
        action: registerAction,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
