import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/zustand";
import { FaRegSadTear } from "react-icons/fa";
import OrderSummary from "../../components/OrderSummary";
import CartCard from "./CartCard";

function Cart() {
  const cartItems = useStore((state) => state.cartItems);

  return (
    <main className="m-auto mb-auto px-3 md:px-10 pt-10 md:max-w-screen-xl lg:max-w-screen-2xl ">
      <button onClick={() => history.back()} className="underline">
        Go Back
      </button>

      <h1 className="text-4xl mb-6 font-bold mt-3">My Cart</h1>
      {cartItems.length ? (
        <div className="md:flex mb-10 gap-10 lg:gap-20">
          <div className="mt-10 mx-auto">
            {cartItems.map((item) => (
              <CartCard data={item} key={item.id} />
            ))}
          </div>
          <div className="flex-1 flex flex-col">
            <OrderSummary />
            <div className="mx-auto order-1 flex my-10 flex-col gap-4 justify-center text-center">
              <Link to="/checkout" className="btn-primary">
                Checkout
              </Link>
              <Link to="/" className="btn-outlined">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-col md:flex-row flex gap-5">
          <FaRegSadTear className="text-9xl m-auto" />
          <div className="flex flex-col gap-6 m-auto">
            <h2 className="text-xl text-slate-500 text-center">
              Cart is empty
            </h2>
            <Link to="/" className="btn-outlined whitespace-nowrap w-min ">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
