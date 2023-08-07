import React from "react";
import categories from "./categories";

export default function Filters({ changeCategory, currentCat }) {
  return (
    <div className="mx-auto  flex flex-col ">
      <div className="flex gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.category}
            className={`cursor-pointer basis-20 outline outline-4 outline-pink rounded-2xl py-1 px-2 text-center hover:outline-blue hover:text-blue ${
              currentCat === cat.category && "bg-pink text-slate-700 "
            }`}
            onClick={() => changeCategory(cat.category)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
