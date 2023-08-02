import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { Layout } from "./components/Layout/HomeTemplate/index";
import Loader from "./components/ui/Loader";
import { HomeTemplate } from "./components/Layout/HomeTemplate/index";
import { OrderPageTemplate } from "./components/Layout/OrderPageTemplate";

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
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="" element={<OrderPageTemplate />}>
          <Route path="confirmation" element={<CheckoutSuccess />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
