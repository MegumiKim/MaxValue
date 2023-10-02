import React from "react";
import { Link } from "react-router-dom";
import currencyFormat from "../../../../utils/currecyFormat";

export default function Card({ item }) {
  return (
    <Link
      to={`product/${item.id}`}
      key={item.id}
      className="items-start flex flex-col basis-1/4 md:basis-1/3 hover:bg-slate-100 dark:hover:bg-slate-600 p-2 relative rounded"
      props={item}
    >
      <div className="w-full m-auto">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full 2xl:h-60 h-48 object-cover m-auto"
        />
      </div>
      <div className="flex-1 px-3 pt-2 flex flex-col justify-between w-full">
        <h3 className="text-lg whitespace-nowrap truncate">{item.title}</h3>
        <p className=" text-red-500">{currencyFormat(item.price)}</p>
      </div>
      <div className="absolute bg-red-600 text-white p-2 top-0 left-1 rounded-lg">
        {item.discountPercentage.toFixed(0)} % OFF
      </div>
    </Link>
  );
}
