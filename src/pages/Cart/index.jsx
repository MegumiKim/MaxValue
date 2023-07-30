import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import CartItems from "../../components/CartItems";

function Cart() {
  return (
    <main className="mx-4 md:flex md:mx-auto md:max-w-screen-lg gap-4 ">
      <div className="">
        <div className="">
          <h1 className="text-4xl mb-6">My Cart</h1>
        </div>
        <CartItems />
        <div className="flex gap-4 justify-center">
          <Link
            to="/checkout"
            className="bg-red-500 text-white my-4 py-3 px-6 rounded-full mx-auto"
          >
            Checkout
          </Link>
          <Link
            to="/"
            className="outline outline-red-500 text-white my-4 py-3 px-6 rounded-full mx-auto"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      <div>
        <OrderSummary />
      </div>
    </main>
  );
}

export default Cart;
