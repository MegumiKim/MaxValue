import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="mx-auto my-5 md:mb-0 flex max-w-full">
      <ul className="pagination flex flex-wrap mx-auto outline outline-pink outline-2 rounded-lg divide-x-2 divide-pink ">
        {pageNumbers.map((number) => (
          <li key={number} className="text-lg relative ">
            <button
              className={`px-4 hover:bg-blue hover:rounded-sm hover:text-white ${
                currentPage === number && "bg-pink text-slate-700 rounded-sm"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
