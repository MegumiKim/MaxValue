import React from "react";
import { useStore } from "../../store/zustand";
import currencyFormat from "../../utils/currecyFormat";

export default function OrderSummary() {
  const total = useStore((state) => state.total);
  const totalQty = useStore((state) => state.totalQty);
  const shipping = 10;

  return (
    <table className="order-2 md:order-1 max-w-sm mx-auto border-separate sm:border-spacing-x-10 border px-4 sm:px-0 pb-4 rounded-lg">
      <caption>
        <h2 className="text-2xl mb-5">Order Summary</h2>
      </caption>

      <tbody className="outline-t-4 outline-slate-700">
        <tr>
          <td>Total Items</td>
          <td className="text-end">{totalQty}</td>
        </tr>
        <tr>
          <td>Sub Total</td>
          <td className="text-end">{currencyFormat(total)} </td>
        </tr>
        <tr>
          <td>VAT (15%, included)</td>
          <td className="text-end">{currencyFormat(total * 0.15)}</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className="text-end">{currencyFormat(shipping)} </td>
        </tr>

        <tr className="text-xl border border-t-4 border-slate-600 ">
          <td className="pt-3 ">Grand Total</td>
          <td className="pt-3 text-end ">
            {currencyFormat(total + shipping)}{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
