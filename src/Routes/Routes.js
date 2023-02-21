import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SingleProduct from "../Pages/Products/SingleProduct";
import SignUp from "../Pages/SignUp/SignUp";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

export const router = createBrowserRouter([
    {
        errorElement:
            <>
                <Header />
                <ErrorPage />
                <Footer />
            </>,
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/product/:id',
                element: <SingleProduct />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])