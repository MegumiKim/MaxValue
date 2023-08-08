import React, { useState } from "react";
import { useProductStore } from "../../../../store/productsStore";
import { Link, useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { products } = useProductStore();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // Index of the selected item in the dropdown

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedItemIndex(-1); //Reset selected index
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedItemIndex((prevState) => prevState + 1);
    } else if (event.key === "ArrowUp") {
      setSelectedItemIndex((prevState) => prevState - 1);
    } else if (event.key === "Enter" && filteredProducts[selectedItemIndex]) {
      console.log();
      setSelectedItemIndex(-1);
      setSearchTerm("");
      navigate(`/product/${filteredProducts[selectedItemIndex].id}`);
    }
  };

  const filteredProducts =
    products && Array.isArray(products)
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const productsList = filteredProducts.map((product, i) => {
    const isSelected = i === selectedItemIndex;

    return (
      <Link
        key={product.id}
        to={`product/${product.id}`}
        className={`block p-2 hover:text-white  dark:hover:text-black  ${
          isSelected && "text-white dark:text-black"
        }`}
        onClick={() => {
          setSearchTerm("");
        }}
      >
        {product.title}
      </Link>
    );
  });
  const dropDown = (
    <ul
      className="absolute md:top-11 p-2 w-full bg-blue z-10 rounded-md"
      onMouseLeave={() => setSearchTerm("")}
    >
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
        onKeyDown={handleKeyDown}
        className="focus:h-10 w-full mt-4 indent-2 sm:mt-0 border-slate-900 border-2 border-solid rounded dark:bg-slate-700 dark:border-none"
      />
      {searchTerm.length > 0 && dropDown}
    </div>
  );
}
