import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NavbarLanding } from './features/navbar/NavbarLanding';
import { Home } from './pages/Home'
import PageNotFound from './pages/404';
import ProductListLanding from './features/product/components/ProductListLanding';
import Footer from './features/footer/Footer';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productos",
    element: <NavbarLanding>
      <ProductListLanding />
      <Footer />
    </NavbarLanding>,
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
      <a href="https://api.whatsapp.com/send?phone=5491553297491&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos." className="whatsapp hover:opacity-75" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  )
}

export default App
