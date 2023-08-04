import React, { useEffect } from "react";
import ProductList from "./ProductList/index.jsx";
import { useApi } from "../../hooks/api.js";
import { baseURL } from "../../hooks/constants.js";
import Loader from "../../components/ui/Loader.jsx";
import { useProductStore } from "../../store/productsStore.js";
import Filters from "./ProductList/Filters.jsx";
import { useFilterStore } from "../../store/filterStore.js";
import categoryFilter from "../../utils/categoryFilter.js";

function Home() {
  const { data, loading } = useApi(baseURL + "/?limit=0");
  const { category } = useFilterStore();
  const { setProducts } = useProductStore();

  useEffect(() => {
    setProducts(data.products);
  }, [category, data]);

  if (loading || !data.products) {
    return <Loader />;
  }

  return (
    <main className="m-auto md:max-w-screen-lg ">
      <section className="hero flex justify-end"></section>
      <div className="px-3 md:mx-4">
        <Filters />
        <ProductList products={categoryFilter(data.products, category)} />
        {/* <ProductList products={products} /> */}
      </div>
    </main>
  );
}

export default Home;
