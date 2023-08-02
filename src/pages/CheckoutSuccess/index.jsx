import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import CartItems from "../../components/CartItems";
import { useStore } from "../../store/zustand";
import { btnStyles } from "../../styles/tailwindClasses";
import { useUserInfoStore } from "../../store/userInfoStore";

export default function CheckoutSuccess() {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const total = useStore((state) => state.total);

  const date = new Date();
  const today = date.toLocaleDateString();
  date.setDate(date.getDate() + 3);

  return (
    <main className="md:mx-auto px-4 ">
      <h1 className="text-2xl mb-8 ">Thank you for your order!</h1>

      <div className="flex flex-col gap-14 md:flex-row">
        <CartItems />

        <div>
          <table>
            <caption className="text-xl">Order Confirmation</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{userInfo.name}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{userInfo.address}</td>
              </tr>
              <tr>
                <td>Order Date</td>
                <td>{today}</td>
              </tr>
              <tr>
                <td>Expected Delivery Date</td>
                <td>{date.toLocaleDateString()}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <OrderSummary /> */}
      </div>

      <div className="flex">
        <Link to="/" className={"m-auto " + btnStyles}>
          Back To Home
        </Link>
      </div>
    </main>
  );
}
