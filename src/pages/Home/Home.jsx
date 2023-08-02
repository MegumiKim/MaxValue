import React from "react";
import ProductList from "./ProductList/index.jsx";

const sortBtnStyles =
  "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-4 mx-auto";

function Home() {
  return (
    <main className="m-auto md:max-w-screen-lg ">
      <section className="hero flex justify-end">
        <h1 className="font-bold text-5xl my-auto me-5 text-black logo shadow-xl">
          Summer Sale
        </h1>
      </section>
      <div className="px-3 md:px-0">
        <div className="flex">
          <button className={sortBtnStyles}>Sort By Categories</button>
          <button className={sortBtnStyles}>Price</button>
          <button className={sortBtnStyles}>Motor Cycles</button>
        </div>
        <ProductList />
      </div>
    </main>
  );
}

export default Home;
