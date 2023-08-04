import React from "react";
import Card from "./Card";
import { useFilterStore } from "../../../store/filterStore.js";
import categoryFilter from "./filters/filterFunctions/categoryFilter.js";
import sortItems from "./filters/filterFunctions/sortItems";
import { useSortStore } from "../../../store/sortStore";

export default function ProductList(items) {
  const { category } = useFilterStore();
  const { sort } = useSortStore();

  const filteredProducts = categoryFilter(items.products, category);
  const sortedProducts = sortItems(filteredProducts, sort);

  const productsToDisplay = sortedProducts.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <div className="">
      <div className="grid sm:gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 md:gap-y-8">
        {productsToDisplay}
      </div>
    </div>
  );
}
