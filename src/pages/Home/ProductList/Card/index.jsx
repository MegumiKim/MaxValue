import React from "react";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link
      to={`product/${item.id}`}
      key={item.id}
      className="items-start flex flex-col basis-1/4 md:basis-1/3 hover:border-2 border-solid border-gray-200 p-4 relative rounded"
      props={item}
    >
      <div className="m-auto">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full sm:h-48 object-cover m-auto"
        />
      </div>
      <div className="flex-1 px-3 pt-2 flex flex-col justify-between w-full">
        <h3 className="text-lg whitespace-nowrap truncate">{item.title}</h3>
        <p className="font-bold">USD {item.price}</p>
      </div>
      <div className="absolute bg-red-600 text-white p-2 top-0 left-0">
        {item.discountPercentage.toFixed(1)} % OFF
      </div>
    </Link>
  );
}
