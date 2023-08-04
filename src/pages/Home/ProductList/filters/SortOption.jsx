import React from "react";

export default function SortOption(props) {
  const option = props.option;

  return (
    <div className="m-auto basis-24 flex-grow flex py-2 px-2 w-fit text-sm md:text-base md:w-36 whitespace-normal hover:text-red-400">
      <input
        type="radio"
        id={option}
        name="sort"
        value={option}
        className="hidden"
        onChange={(event) => props.sortChange(event)}
      />
      <label className="m-auto" htmlFor={option}>
        {props.name.toUpperCase()}
      </label>
    </div>
  );
}
