import React from "react";
import Card from "./Card";
import { FaFilter } from "react-icons/fa";
import Filters from "./Filters";

export default function ProductList(items) {
  const products = items.products.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <div className="">
      <div className="grid sm:gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products}
      </div>
    </div>
  );
}
