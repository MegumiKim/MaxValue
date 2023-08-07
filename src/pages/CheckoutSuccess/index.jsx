import React from "react";
import { Link } from "react-router-dom";
import { useUserInfoStore } from "../../store/userInfoStore";

export default function CheckoutSuccess() {
  const userInfo = useUserInfoStore((state) => state.userInfo);

  const date = new Date();
  const today = date.toLocaleDateString();
  date.setDate(date.getDate() + 3);

  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <main className="md:mx-auto px-4 mt-10 h-screen">
      <h1 className="text-4xl mb-8 mx-auto font-bold">
        Thank you for your order!
      </h1>
      <div className="flex flex-col gap-14 md:flex-row m-auto text-center">
        <div className="flex">
          <Link to="/" className="mx-auto md:mx-0 my-auto btn-primary ">
            Back To Home
          </Link>
        </div>
        <table className="mt-6 max-w-md mx-auto border-separate border-spacing-x-10">
          <caption className="text-xl">Delivery Information</caption>
          <tbody className="text-start">
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
              <td>Expected Delivery</td>
              <td>{date.toLocaleDateString()}</td>
            </tr>
            <tr>
              <td>Order Number</td>
              <td>{orderNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
