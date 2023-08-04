import React from "react";

import { useFilterStore } from "../../../../store/filterStore";
import Category from "./Category";

export default function Filters() {
  const { setCategory } = useFilterStore();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="mx-auto my-10 flex flex-col gap-6 ">
      <fieldset>
        <legend className="text-2xl mb-4 font-bold">Categories</legend>
        <div className="flex gap-4 flex-wrap justify-start ">
          <Category category="all" onChange={handleChange}></Category>
          <Category category="women" onChange={handleChange}></Category>
          <Category category="men" onChange={handleChange}></Category>
          <Category category="cosmetics" onChange={handleChange}></Category>
          <Category category="groceries" onChange={handleChange}></Category>
          <Category category="electronics" onChange={handleChange}></Category>
          <Category category="decorations" onChange={handleChange}></Category>
          <Category category="others" onChange={handleChange}></Category>
        </div>
      </fieldset>
    </div>
  );
}
