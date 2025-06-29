// src/router.tsx
import { createBrowserRouter} from 'react-router';
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
import AppLayout from '../Layout/AppLayout';
import Profile from '../Pages/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        loader: requireAuth,
        errorElement: <ErrorBoundary />,
        children: [
            { index: true, element: <Home /> }, // ✅ route par défaut : / → Home
            { path: 'home', element: <Home /> },
            { path: 'category', element: <Category /> },
            { path: 'transactions', element: <Expenses /> },
            { path: 'transactions/:category', element: <Expenses /> },
            { path: 'profile', element: <Profile /> }
        ],
    },
    {
        path: '/login',
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
