import React from "react";
import Loader from "../../../components/ui/Loader";
import Card from "./Card";
import { useApi } from "../../../hooks/api";
import { baseURL } from "../../../hooks/constants";

export default function ProductList() {
  const { data, loading } = useApi(baseURL);

  if (loading || !data.products) {
    return <Loader />;
  }

  const products = data.products.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <div className="grid sm:gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {products}
    </div>
  );
}
