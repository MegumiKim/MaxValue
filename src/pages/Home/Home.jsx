import React, { useEffect } from "react";
import { useApi } from "../../hooks/api.js";
import { baseURL } from "../../hooks/constants.js";
import { useProductStore } from "../../store/productsStore.js";
import Loader from "../../components/ui/Loader.jsx";
import ProductList from "./ProductList/index.jsx";

function Home() {
  const { data, loading } = useApi(baseURL + "/?limit=0");
  const { setProducts } = useProductStore();

  useEffect(() => {
    setProducts(data.products);
  }, [data]);

  if (loading || !data.products) {
    return <Loader />;
  }

  return (
    <main className="m-auto w-full md:max-w-screen-xl lg:max-w-screen-2xl">
      <section className="hero flex w-full">
        <div className="my-auto px-6 text-xl w-full flex flex-wrap justify-between md:justify-around gap-4 md:text-5xl ">
          <h1 className="hero-text"> Any Time</h1>
          <h1 className="hero-text ">Anywhere</h1>
        </div>
      </section>
      <ProductList products={data.products} />
    </main>
  );
}

export default Home;
