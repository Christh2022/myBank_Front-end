import { Outlet } from 'react-router';
import Nav from '../Components/Navigation/Nav';
import {  useSelector } from 'react-redux';
import { visible } from '../Redux/Slices/navSlice';

function AppLayout() {
    const navVisible = useSelector(visible)
  return (
    <main>
      {navVisible && (
        <>
          <Nav />
        </>
      )}
      <Outlet />
    </main>
  );
}
export default AppLayout;
