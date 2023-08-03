import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { useStore } from "../../store/zustand";
import formattedNOK from "../../utils/currecyFormat";
import { Link } from "react-router-dom";

export default function CartCard({ data }) {
  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(data);
  };

  return (
    <div className="flex mb-4 pb-4 border-b-2 border-opacity-30 border-slate-400">
      <div className="flex-1 max-h-24">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="max-h-full object-cover m-auto"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <div className="">
          <Link
            to={"/product/" + data.id}
            className="text-lg font-bold hover:underline"
          >
            {data.title}
          </Link>
          <div className="flex gap-4 justify-between">
            <div className="flex gap-5">
              <p className="">{formattedNOK(data.price)} </p>
              <p>qty: {data.qty}</p>
            </div>
            <button onClick={(event) => handleRemove(event)}>
              <FaTrash />
            </button>
          </div>
        </div>
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