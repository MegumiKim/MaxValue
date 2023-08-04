import React from "react";

export default function Category(props) {
  const category = props.category;

  return (
    <div className="m-auto basis-24 flex-grow flex outline outline-2 rounded-2xl py-2 px-2 w-fit text-sm md:text-base md:w-36 whitespace-normal hover:text-red-400">
      <input
        type="radio"
        id={category}
        name="category"
        value={category}
        onChange={(event) => props.onChange(event)}
        className="hidden"
      />
      <label htmlFor={category} className="m-auto">
        {category.toUpperCase()}
      </label>
    </div>
  );
}
