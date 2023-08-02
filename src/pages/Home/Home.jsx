import React from "react";
import ProductList from "./ProductList/index.jsx";
import { useApi } from "../../hooks/api.js";
import { baseURL } from "../../hooks/constants.js";
import Loader from "../../components/ui/Loader.jsx";
import { useProductStore } from "../../store/productsStore.js";
import Filters from "./ProductList/Filters.jsx";
import { FaFilter } from "react-icons/fa";

function Home() {
  const { data, loading } = useApi(baseURL);
  const setProducts = useProductStore((state) => state.setProducts);
  const products = useProductStore((state) => state.products);

  if (loading || !data.products) {
    return <Loader />;
  }

  const sortedProducts = products;
  setProducts(data.products);

  return (
    <main className="m-auto md:max-w-screen-lg ">
      <section className="hero flex justify-end">
        {/* <h1 className="font-bold text-5xl my-auto me-5 text-black logo shadow-xl">
          Summer Sale
        </h1> */}
      </section>
      <div className="px-3 md:px-0">
        <button className="flex align-middle gap-3 my-4 me-0">
          <FaFilter className="m-auto " />
          Filter
        </button>
        <Filters />

        <ProductList products={data.products} />
      </div>
    </main>
  );
}

export default Home;
