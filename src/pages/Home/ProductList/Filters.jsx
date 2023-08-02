import React, { useState } from "react";

export default function Filters() {
  const [category, setCategory] = useState("All");

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <div className="my-6">
      <fieldset>
        <legend>Category</legend>
        <div className="flex gap-4">
          <div>
            <input type="radio" id="all" name="category" value="all" />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input
              type="radio"
              id="electronics"
              name="category"
              value="electronics"
            />
            <label htmlFor="electronics">Digital</label>
          </div>
          <div>
            <input
              type="radio"
              id="Cosmetics/Perfumes"
              name="category"
              value="Cosmetics/Perfumes"
            />
            <label htmlFor="Cosmetics/Perfumes">Cosmetics/Perfumes</label>
          </div>
          <div>
            <input
              type="radio"
              id="Glossaries"
              name="category"
              value="Glossaries"
            />
            <label htmlFor="Glossaries">Glossaries</label>
          </div>
          <div>
            <input
              type="radio"
              id="Interior/Decorations"
              name="category"
              value="Interior/Decorations"
            />
            <label htmlFor="Interior/Decorations">Interior/Decorations</label>
          </div>
        </div>
      </fieldset>
      <fieldset>
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
            <label htmlFor="highestDiscountRate">Highest Discount Rate</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
