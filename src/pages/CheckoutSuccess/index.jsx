import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import CartItems from "../../components/CartItems";
import { useStore } from "../../store/zustand";
import { btnStyles } from "../../styles/tailwindClasses";
import { useUserInfoStore } from "../../store/userInfoStore";

export default function CheckoutSuccess() {
  const userInfo = useUserInfoStore((state) => state.userInfo);

  const date = new Date();
  const today = date.toLocaleDateString();
  date.setDate(date.getDate() + 3);

  return (
    <main className="md:mx-auto px-4 mt-10">
      <h1 className="text-4xl mb-8 mx-auto">Thank you for your order!</h1>
      <div className="flex flex-col gap-14 md:flex-row m-auto text-center">
        <div className="flex">
          <Link to="/" className="mx-auto md:mx-0 my-auto btn-outlined">
            Back To Home
          </Link>
        </div>
        <table className="mt-6 max-w-md mx-auto">
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
    </main>
  );
}
