import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import CartItems from "../../components/CartItems";
import { useStore } from "../../store/zustand";

function Cart() {
  const cartItems = useStore((state) => state.cartItems);

  return (
    <main className="md:mx-auto px-10 my-10 min-h-screen min-w-full">
      {/* <main className="md:max-w-screen-lg mx-auto px-10 min-w-fit"> */}
      <h1 className="text-4xl mb-6">My Cart</h1>
      {cartItems.length ? (
        <div>
          <div className="md:flex mb-10 gap-10">
            <div className="md:flex md:mx-auto gap-4 flex-1">
              <CartItems />
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
        </div>
      ) : (
        <div className="flex flex-col gap-5 w-min m-auto">
          <h2 className="text-xl text-slate-500 text-center">Cart is empty</h2>
          <Link to="/" className="btn-outlined whitespace-nowrap ">
            Continue Shopping
          </Link>
        </div>
      )}
    </main>
  );
}

export default Cart;
