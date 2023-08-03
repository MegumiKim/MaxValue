import React from "react";

export default function Category(props) {
  const category = props.category;

  return (
    <div className="flex gap-1">
      <input
        type="radio"
        id={category}
        name="category"
        value={category}
        onChange={(event) => props.onChange(event)}
      />
      <label htmlFor={category}>{category}</label>
    </div>
  );
}
