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
    <main className="m-auto md:max-w-screen-lg md:flex ">
      <section className="hero flex justify-end w-full md:w-2/5"></section>
      <ProductList products={data.products} />
    </main>
  );
}

export default Home;
