import React, { useState } from "react";
import { useProductStore } from "../../../../store/productsStore";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const { products } = useProductStore();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts =
    products && Array.isArray(products)
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const productsList = filteredProducts.map((product) => {
    return (
      <Link
        key={product.id}
        to={`product/${product.id}`}
        className="hover:text-white block dark:hover:text-black "
        onClick={() => {
          setSearchTerm("");
        }}
      >
        {product.title}
      </Link>
    );
  });
  const dropDown = (
    <ul className="absolute md:top-7 p-2 w-full bg-slate-400 ">
      {filteredProducts.length ? productsList : <li>No Item</li>}
    </ul>
  );

  return (
    <div className="relative w-full md:w-96">
      <input
        id="search-bar"
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="w-full mt-4 indent-2 sm:mt-0 border-slate-900 border-2 border-solid rounded dark:bg-slate-700 dark:border-none"
      />
      {searchTerm.length > 0 && dropDown}
    </div>
  );
}
