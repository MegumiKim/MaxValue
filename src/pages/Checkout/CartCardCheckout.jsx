import React from "react";
import PropTypes from "prop-types";
import currencyFormat from "../../utils/currecyFormat";

export default function CartCardCheckout({ data }) {
  return (
    <div className="flex mb-4 pb-4 border-b-2 border-opacity-30 border-slate-400 gap-6 max-w-xs">
      <div className="m-auto">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-20 object-cover my-auto rounded"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center truncate">
        <h3 className="text-lg font-semibold truncate">{data.title}</h3>
        <div className="flex gap-4 justify-between">
          <div className="flex gap-5">
            <p className="">{currencyFormat(data.price)} </p>
            <p>qty: {data.qty}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCardCheckout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
