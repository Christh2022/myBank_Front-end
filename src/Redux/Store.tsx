import { configureStore } from '@reduxjs/toolkit';
import navReducer from './Slices/navSlice'
import userReducer from './Slices/userSlice'
import categorySlice from './Slices/categorySlice';

const store = configureStore({
    reducer: {
        nav: navReducer,
        user: userReducer,
        category: categorySlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;