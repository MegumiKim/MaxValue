import React from "react";
import Loader from "../ui/Loader";
import Card from "../Card";
import { useApi } from "../../hooks/api";

const baseURL = "https://dummyjson.com/products";
export default function ProductList() {
  const { data, loading } = useApi(baseURL);

  // console.log(data.products, loading);

  if (loading || !data.products) {
    return <Loader />;
  }

  const products = data.products.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <div className="grid lg:grid-cols-5 gap-5 sm:grid-cols-3">{products}</div>
  );
}
