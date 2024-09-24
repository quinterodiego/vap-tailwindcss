import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import ProductListLanding from './features/product/components/ProductListLanding';
import { NavbarLanding } from './features/navbar/NavbarLanding';
import Footer from './features/footer/Footer';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  {
    path: "/",
    element: <Protected>
      <Home />
    </Protected>,
  },
  {
    path: "/productos",
    element: <NavbarLanding>
      <ProductListLanding />
      <Footer />
    </NavbarLanding>,
  },
  {
    path: "/admin",
    element: <ProtectedAdmin>
      <AdminHome />
    </ProtectedAdmin>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <Protected>
      <CartPage />
    </Protected>,
  },
  {
    path: "/checkout",
    element: <Protected>
      <Checkout />
    </Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected>
      <ProductDetailPage />
    </Protected>,
  },
  {
    path: "/admin/product-detail/:id",
    element: <ProtectedAdmin>
      <AdminProductDetailPage />
    </ProtectedAdmin>,
  },
  {
    path: "/admin/product-form",
    element: <ProtectedAdmin>
      <AdminProductFormPage />
    </ProtectedAdmin>,
  },
  {
    path: "/admin/orders",
    element: <ProtectedAdmin>
      <AdminOrdersPage />
    </ProtectedAdmin>,
  },
  {
    path: "/admin/product-form/edit/:id",
    element: <ProtectedAdmin>
      <AdminProductFormPage />
    </ProtectedAdmin>,
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage />
  },
  {
    path: "/orders",
    element: <UserOrdersPage />
  },
  {
    path: "/profile",
    element: <UserProfilePage />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(() => {
    if(user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user])
  

  return (
    <div className="App">
      <RouterProvider router={router} />
      <a href="https://api.whatsapp.com/send?phone=5491553297491&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos." className="whatsapp hover:opacity-75" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
