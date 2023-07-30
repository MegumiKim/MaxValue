import React from "react";
import { useStore } from "../../store/zustand";

export default function OrderSummary() {
  const total = useStore((state) => state.total);
  const totalQty = useStore((state) => state.totalQty);
  const shipping = 35;

  return (
    <table className="w-full max-w-md mx-auto">
      <caption>
        <h2 className="text-2xl mb-5">Order Summary</h2>
      </caption>

      <tbody className="divide-y divide-solid ">
        <tr>
          <td>Total Items</td>
          <td className="text-end">{totalQty}</td>
        </tr>
        <tr>
          <td>Sub Total</td>
          <td className="text-end">{total} NOK</td>
        </tr>
        <tr>
          <td>VAT (15%)</td>
          <td className="text-end">{total * 0.15} NOK</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className="text-end">{shipping} kr</td>
        </tr>
        <tr className="text-xl">
          <td className="pt-3">Grand Total</td>
          <td className="pt-3 text-end">{total + shipping} kr</td>
        </tr>
      </tbody>
    </table>
  );
}
