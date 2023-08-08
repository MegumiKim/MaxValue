import React from "react";
import PropTypes from "prop-types";
import useStore from "../../store/zustand";
// import { useStore } from "../../store/zustand";
import currencyFormat from "../../utils/currecyFormat";
import { Link } from "react-router-dom";

export default function CartCard({ data }) {
  const { changeQty, removeFromCart } = useStore();

  return (
    <div className="flex align-middle mb-4 pb-4 border-b-2 border-opacity-30 border-slate-400 gap-3 max-w-xs md:max-w-md">
      <div className="max-w-full flex-1 m-auto">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="object-cover m-auto rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col divide-y-slate-50 truncate">
        <Link
          to={"/product/" + data.id}
          className="text-lg hover:underline truncate font-semibold "
        >
          {data.title}
        </Link>
        <p className="">{currencyFormat(data.price)} </p>

        <div className="flex md:mx-0 justify-between gap-3">
          <form className="align-middle flex my-4 ">
            <label className="align-middle text-center md:m-auto">Qty:</label>
            <input
              id="qty"
              type="number"
              value={data.qty}
              min="1"
              max={data.stock}
              className="w-14 dark:bg-slate-700 dark:border-none"
              onChange={(event) =>
                changeQty(data, parseInt(event.target.value))
              }
            />
          </form>
          <button
            className="flex gap-2 me-0 my-auto"
            onClick={() => removeFromCart(data)}
          >
            Delete
          </button>
        </div>

        <p className="border-t-2 border-dotted dark:border-slate-600 pt-3 text-end">
          Total: {currencyFormat(data.qty * data.price)}
        </p>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
