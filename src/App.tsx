import { RouterProvider } from "react-router/dom";
import router from "./Router/Routes";
import { requireAuth } from "./utils/Auth";
import { useEffect, useState } from "react";
import "./App.css";

function LoaderBoundary() {
  return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
          <div className="spinner" />
          <p>Vérification du token...</p>
      </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const path = window.location.pathname;
    
    console.log(path === '/Login');
    if (path === '/Login' || path === '/register') {
      setLoading(false);
      
    } else {
      // Vérifier le token à chaque chargement de l'application
      setLoading(true);
      requireAuth()
        .catch(() => {
            // Rediriger ou gérer l'erreur ici si besoin
        })
        .finally(() => setLoading(false));
    }
    
  }, []);


  return (
    <div>
      {loading && <LoaderBoundary />}
      <RouterProvider router={router} />
    </div>
  )
}



export default App
