import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function SortOptions({ changeSortOrder }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSortChange = (event) => {
    changeSortOrder(event.target.value);
    setDropdownOpen(false);
  };

  const handleClick = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };

  const sortOptions = [
    {
      option: "discountRate",
      displayedAs: "Discount Rate",
    },
    { option: "lowestPrice", displayedAs: "Price Lowest" },
    { option: "highestPrice", displayedAs: "Price Highest" },
  ];

  const optionMap = sortOptions.map((option, i) => (
    <button
      key={i}
      value={option.option}
      onClick={(event) => handleSortChange(event)}
      className="outline-top rounded-none m-auto py-2 px-1 text-sm md:text-base md:w-36 hover:text-red-400"
    >
      {option.displayedAs}
    </button>
  ));

  return (
    <div className="flex justify-end">
      <div className="relative ">
        <button
          onClick={() => handleClick()}
          className="p-2 rounded-md w-fit flex gap-2"
        >
          <FaFilter className="m-auto" />
          Sort Items
        </button>

        {dropdownOpen === true && (
          <div
            id="filterDropdown"
            className="absolute z-10 bg-white dark:bg-zinc-800 right-0 p-4 pt-0 pe-0 "
          >
            {optionMap}
          </div>
        )}
      </div>
    </div>
  );
}
