import React from "react";
import PropTypes from "prop-types";
export default function CartCard({ data }) {
  return (
    <div className="flex align-middle mb-4">
      <div className="flex-1 max-h-24">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="max-h-full object-cover m-auto"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <div className="">
          <h3 className="text-2xl">{data.title}</h3>
          <div className="flex gap-4">
            <p className="">{data.price} NOK</p>
            <p>qty: {data.qty}</p>
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
