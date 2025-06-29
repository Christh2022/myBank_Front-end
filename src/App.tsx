import { RouterProvider } from "react-router/dom";
import router from "./Router/Routes";
import { requireAuth } from "./utils/Auth";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Navigation/Nav";

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
  const [token, setToken] = useState<string | null>("")
  
  useEffect(() => {
    const path = window.location.pathname;
    setToken(localStorage.getItem('token'))
    
    if (!token &&  path === '/Login' || path === '/register' ) {
      setLoading(false);
    } else {
      // Vérifier le token à chaque chargement de l'application
      setLoading(true);
      requireAuth()
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, []);
  
  const location = window.location.pathname;


  return (
    <>
      {loading && <LoaderBoundary />}
      <RouterProvider router={router} />
      {
        location === 'Login' || location === 'register' || !token &&
        <>
          <Nav/>
        </>
      }
    </>
  )
}



export default App
