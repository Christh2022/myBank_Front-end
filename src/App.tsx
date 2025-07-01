import { RouterProvider } from "react-router/dom";
import router from "./Router/Routes";
import { requireAuth } from "./utils/Auth";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Navigation/Nav";
import { useDispatch, useSelector } from "react-redux";
import { setNavVisible, visible } from "./Redux/Slices/navSlice";

export function LoaderBoundary() {
  return (
      <div style={{ padding: '2rem', textAlign: 'center' }} className="absolute top-0 z-50 w-[100%] h-full bg flex flex-col justify-center items-center">
          <div className="spinner" />
          <p>Loading...</p>
      </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);
  const navVisible = useSelector(visible)
  const dispatch = useDispatch();

  
  useEffect(() => {
    const path = (window.location.pathname);
    const token = (localStorage.getItem('token'))
    
    if (!token &&  path === '/Login' || path === '/register' ) {
      setLoading(false);
    } else {
      // Vérifier le token à chaque chargement de l'application
      setLoading(true);
      requireAuth()
        .then(()=>dispatch(setNavVisible(true)))
      .catch(() => {})
      .finally(() => setLoading(false));
    }
  }, [navVisible, dispatch]);
  



  return (
    <>
      {loading && !navVisible &&  <LoaderBoundary />}
      <RouterProvider router={router} />
      {
        navVisible &&
        <>
          <Nav/>
        </>
      }
    </>
  )
}



export default App
