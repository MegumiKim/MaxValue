import React from "react";
import Card from "./Card";

export default function ProductList(items) {
  const products = items.products.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <div className="">
      <div className="grid sm:gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 md:gap-y-8">
        {products}
      </div>
    </div>
  );
}
