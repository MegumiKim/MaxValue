import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import CartItems from "../../components/CartItems";
import { useStore } from "../../store/zustand";

function Cart() {
  const cartItems = useStore((state) => state.cartItems);

  return (
    <main className="md:mx-auto px-10 my-10">
      {/* <main className="md:max-w-screen-lg mx-auto px-10 min-w-fit"> */}
      <h1 className="text-4xl mb-6">My Cart</h1>
      {cartItems.length ? (
        <div>
          <div className="md:flex mb-10 gap-10">
            <div className="md:flex md:mx-auto gap-4 flex-1">
              <CartItems />
            </div>
            <div className="flex-1">
              <OrderSummary />
            </div>
          </div>
          <div className="flex gap-4 justify-start">
            <Link to="/checkout" className="btn-primary">
              Checkout
            </Link>
            <Link to="/" className="btn-outlined">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <h2 className="text-xl text-slate-500 flex gap-1 justify-start">
          Cart is empty
          {/* <FaSadTear className="m-auto" /> */}
        </h2>
      )}
    </main>
  );
}

export default Cart;
