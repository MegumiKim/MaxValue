import React, { useEffect, useState } from "react";
import Card from "./Card";
import categoryFilter from "./filters/categoryFilter/categoryFilter.js";
import sortItems from "./filters/sortFunction/sortItems";
import Pagination from "./pagination/pagination";
import Categories from "./filters/categoryFilter/Categories";
import SortOptions from "./filters/sortFunction/SortOptions";

export default function ProductList({ products }) {
  // Category Filter
  const [category, setCategory] = useState("all");
  const filteredProducts = categoryFilter(products, category);

  // Handle category change
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  // Sort
  const [sortOrder, setSortOrder] = useState("");
  const sortedProducts = sortItems(filteredProducts, sortOrder);
  // Handle sort order change
  const changeSortOrder = (sortOrder) => setSortOrder(sortOrder);

  // Go back to the first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItems, indexOfLastItem);

  const productsToDisplay = currentItems.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <section className="my-5 m-auto py-10 px-4 w-full h-full max-w-[1200px]">
      <Categories changeCategory={changeCategory} currentCat={category} />

      <SortOptions changeSortOrder={changeSortOrder} />

      <div className="grid sm:gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-4 md:gap-y-2 md:gap-x-6 lg:gap-y-6 ">
        {productsToDisplay}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={sortedProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
}
