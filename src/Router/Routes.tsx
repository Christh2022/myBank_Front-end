// src/router.tsx
import { createBrowserRouter, Navigate } from 'react-router';
import { ErrorBoundary } from '../utils/ErrorBoundary';
import Home from '../Pages/Home/Home';
import Category from '../Pages/Category/Category';
import Expenses from '../Pages/Expenses/Expenses';
import NotFound from '../Pages/NotFound/NotFound';
import { requireAuth } from '../utils/Auth';
import { loginAction } from '../Pages/Login/LoginAction';
import { Login } from '../Pages/Login/Login';
import { registerAction } from '../Pages/Register/RegisterAction';
import { Register } from '../Pages/Register/Register';
import AppLayout from '../Layout/AppLayout';
import Profile from '../Pages/Profile/Profile';
import LeftProfilePart from '../Components/Profile/LeftProfilePart';
import RightProfilePart from '../Components/Profile/RightProfilePart';
import { categoryAction } from '../Pages/Category/categoryAction';
import { categoryLoader } from '../Pages/Category/categoryLoader';
import { expenseLoader } from '../Pages/Expenses/expenseLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    loader: requireAuth,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Navigate to={'home'} /> },
      { path: 'home', element: <Home /> },
      { path: 'category/:id', element: <Category />, loader: categoryLoader, action: categoryAction  },
      { path: 'transactions', element: <Expenses />, loader: expenseLoader, },
      { path: 'transactions/:category', element: <Expenses /> },
      { path: 'profile', element: <Profile /> },
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
  {
    path: '/nav',
    // element: <NotFound />,
    element: (
      <div className="flex items-center flex-1">
        <div className=" flex flex-col md:flex-row  gap-4 flex-1">
          <LeftProfilePart />
          <RightProfilePart />

        </div>
      </div>
    ),
  },
]);

export default router;
