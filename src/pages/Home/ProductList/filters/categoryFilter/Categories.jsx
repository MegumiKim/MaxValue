import React from "react";
import categories from "./categoriesList.js";

export default function Categories({ changeCategory, currentCat }) {
  return (
    <div className="mx-auto flex gap-4 flex-wrap md:flex-nowrap">
      {categories.map((cat) => (
        <button
          key={cat.category}
          className={`cursor-pointer basis-20 flex-grow md:basis-20 xl:basis-24 outline outline-4 outline-pink rounded-2xl py-1 px-2 text-center hover:outline-blue hover:text-blue ${
            currentCat === cat.category && "bg-pink text-slate-700 "
          }`}
          onClick={() => changeCategory(cat.category)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
