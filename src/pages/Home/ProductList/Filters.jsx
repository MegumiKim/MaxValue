import React from "react";
import { FaFilter } from "react-icons/fa";
import { useFilterStore } from "../../../store/filterStore";
import Category from "./Category";

export default function Filters() {
  const { setCategory } = useFilterStore();

  const handleChange = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  return (
    <div className="mx-auto my-10 flex flex-col gap-6 md:max-w-xl ">
      <fieldset>
        <legend className="text-2xl mb-4 mx-auto">Categories</legend>
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

      <div>
        <label
          htmlFor="filterOpen"
          className="outline outline-2 p-2 rounded-md w-fit flex gap-2"
        >
          <FaFilter className="m-auto" />
          Filter
        </label>
        <input
          type="checkbox"
          id="filterOpen"
          className="peer/filterDropdown hidden pt-4"
        />
        <div
          id="filterDropdown"
          className="hidden peer-checked/filterDropdown:block "
        >
          <fieldset className="">
            <legend>Sort By</legend>
            <div className="flex gap-4">
              <div>
                <input
                  type="radio"
                  id="categories"
                  name="sort"
                  value="categories"
                  onChange={handleChange}
                />
                <label htmlFor="categories">Categories</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="lowestFirst"
                  name="sort"
                  value="lowestFirst"
                  onChange={handleChange}
                />
                <label htmlFor="lowestFirst">Lowest Price First</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="highestFirst"
                  name="sort"
                  value="highestFirst"
                  onChange={handleChange}
                />
                <label htmlFor="highestFirst">Highest Price First</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="highestDiscountRate"
                  name="sort"
                  value="highestDiscountRate"
                  onChange={handleChange}
                />
                <label htmlFor="highestDiscountRate">
                  Highest Discount Rate
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
