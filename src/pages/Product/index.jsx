import React from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../../hooks/api";
import { baseURL } from "../../hooks/constants";
import AddToCartBtn from "./AddToCartBtn";

function Product() {
  const { id } = useParams();
  const data = useApi(`${baseURL}/${id}`).data;

  return (
    <main className="sm:mx-10">
      <div className="m-auto md:flex gap-10 h-screen md:max-w-screen-lg ">
        <div className="flex-1 max-w-xl m-auto md:m-0">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="object-cover m-auto w-full "
          />
          <div className="flex max-w-full">
            {data.images &&
              data.images.map((image, i) => (
                <div
                  key={i}
                  className="h-20 m-auto overflow-scroll align-middle flex gap-4"
                >
                  <img className="object-cover" src={image}></img>
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 flex-1 ">
          <small>
            {data.brand} / {data.category}
          </small>
          <h1 className="text-3xl md:text-4xl mb-4">{data.title}</h1>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold text-xl">USD {data.price}</p>
              <var className="text-red-500">{data.discountPercentage}% off</var>
            </div>
            <div>
              <p>Rating: {data.rating}</p>
              <p>In Stock: {data.stock}</p>
            </div>
          </div>
          <div className="flex mt-10">
            <AddToCartBtn data={data} />
          </div>
          <p>{data.description}</p>
        </div>
      </div>
    </main>
  );
}

export default Product;
