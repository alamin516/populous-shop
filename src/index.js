import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/AppProvider";
import { FilterContextProvider } from "./context/FilterContextProvider";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App />
                    <Toaster />
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
    </AuthProvider>
);
reportWebVitals();
