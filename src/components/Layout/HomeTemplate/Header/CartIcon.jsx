import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../../../../store/zustand";

export default function CartIcon() {
  const totalQty = useStore((state) => state.totalQty);

  return (
    <button className="relative">
      <Link to="/cart">
        <FaCartPlus />
        {totalQty > 0 && (
          <span className="pill-badge leading-none dark:outline-white">
            {totalQty}
          </span>
        )}
      </Link>
    </button>
  );
}
