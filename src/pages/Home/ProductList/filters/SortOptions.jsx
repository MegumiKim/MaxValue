import React from "react";
import { useSortStore } from "../../../../store/sortStore";
import SortOption from "./SortOption";
import { FaFilter } from "react-icons/fa";

export default function SortOptions() {
  const { setSortBy } = useSortStore();

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex justify-end">
      <div className="relative ">
        <label htmlFor="filterOpen" className="p-2 rounded-md w-fit flex gap-2">
          <FaFilter className="m-auto" />
          Sort Items
        </label>
        <input
          type="checkbox"
          id="filterOpen"
          className="peer/filterDropdown hidden pt-4"
        />
        <fieldset
          id="filterDropdown"
          className="absolute hidden peer-checked/filterDropdown:block z-10 bg-white dark:bg-zinc-800 right-0 p-4 divide-y pt-0 pe-0 "
        >
          <SortOption
            option="discountRate"
            name="Discount Rate"
            sortChange={handleSortChange}
          />
          <SortOption
            option="lowestPrice"
            name="Price Lowest"
            sortChange={handleSortChange}
          />
          <SortOption
            option="highestPrice"
            name="Price Highest"
            sortChange={handleSortChange}
          />
        </fieldset>
      </div>
    </div>
  );
}
