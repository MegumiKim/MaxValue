import React from "react";
import { useStore } from "../../store/zustand";
import formattedNOK from "../../utils/currecyFormat";

export default function OrderSummary() {
  const total = useStore((state) => state.total);
  const totalQty = useStore((state) => state.totalQty);
  const shipping = 35;

  return (
    <table className="order-2 md:order-1 max-w-lg mx-auto border-separate border-spacing-x-10 border">
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
          <td className="text-end">{formattedNOK(total)} </td>
        </tr>
        <tr>
          <td>VAT (15%)</td>
          <td className="text-end">{formattedNOK(total * 0.15)}</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className="text-end">{formattedNOK(shipping)} </td>
        </tr>

        <tr className="text-xl border border-t-4 border-slate-600 ">
          <td className="pt-3 ">Grand Total</td>
          <td className="pt-3 text-end ">{formattedNOK(total + shipping)} </td>
        </tr>
      </tbody>
    </table>
  );
}
