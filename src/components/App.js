/* IMPORT */
// import { useLocation, matchPath } from "react-router";
import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
// import { useEffect, useState } from "react";
// Importamos el servicio del local storage
// import ls from "../services/localStorage";
// import callToApi from "../services/api";

// Importamos los partial
import Header from "./Header";
import Footer from "./Footer";
import Home from "./main/Home";
import Projects from "./main/Projects";

function App() {
  /* VARIABLES Y DATOS */
  /* EFECTOS */
  /* FUNCIONES HANDLER */
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  /* HTML */

  // const { pathname } = useLocation();
  // const routeData = matchPath("product/:productId", pathname);

  // const productId = routeData !== null ? routeData.params.productId : "";

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<p>hola contacto</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
