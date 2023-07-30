import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/index";
import Loader from "./components/ui/Loader";

const Product = lazy(() => import("./pages/Product/"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Cart = lazy(() => import("./pages/Cart/"));
const Checkout = lazy(() => import("./pages/Checkout/"));
const CheckoutSuccess = lazy(() => import("./pages/CheckoutSuccess/"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmation" element={<CheckoutSuccess />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
