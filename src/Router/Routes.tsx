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
import { IoMdSearch } from 'react-icons/io';
import CustomIcon from '../UI/Icon/CustomIcon';
import { CategorieItem } from '../UI/Categorie/caregorieItem';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    loader: requireAuth,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Navigate to={'home'} /> },
      { path: 'home', element: <Home /> },
      { path: 'category', element: <Category /> },
      { path: 'transactions', element: <Expenses /> },
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
      <div>
        <div className="bg-[#1B1919] rounded-[20px] h-[100%] min-h-[600px] sm:w-[73%]">
          <div className="flex flex-row items-center justify-between px-6 py-4">
            <h3 className="text-[21px] font-bold">My Categories</h3>
            <div className="flex flex-row gap-[12px] ">
              <div className="h-[24px] border px-3 border-[#FFFFFF97] hidden sm:flex items-center justify-between h-[24px] w-[180px] rounded-[15px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="font-semibold w-[80%] text-[15px] "
                />
                <IoMdSearch size={15} className="text-white cursor-pointer" />
              </div>
              <div className="bg-[#fca311] rounded-[5px] h-[24px] w-[103px] flex flex-row items-center justify-center gap-1 cursor-pointer">
                <CustomIcon />
                <p className="font-semibold text-[13px]">Filter</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3  gap-4 py-4 px-6">
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
            <CategorieItem
              category={{
                id: 1,
                title: 'Dev Service',
                icon_name: 'FaLaptopCode',
              }}
            />
          </div>

          <div className="px-6 py-2.5">
            <span className="hover:bg-[#fca311] w-[24px] h-[24px] rounded-full cursor-pointer flex items-center justify-center hover:shadow-[0 0 8px 0 ] ">
              <FaAngleLeft />
            </span>
            <div
              className="bg-[#fca311] w-[24px] h-[24px] rounded-full cursor-pointer flex items-center justify-center  "
              style={{ boxShadow: '0 0 8px 0 rgba(252,163,17,0.1)' }}
            >
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    ),
  },
]);

export default router;
