import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/api";
import { baseURL } from "../../hooks/constants";
import AddToCartBtn from "./AddToCartBtn";
import currencyFormat from "../../utils/currecyFormat";
import Loader from "../../components/ui/Loader";
import { FaStar } from "react-icons/fa";

function Product() {
  const { id } = useParams();
  const { data, loading } = useApi(`${baseURL}/${id}`);
  const [image, setImage] = useState(data?.thumbnail || "");

  useEffect(() => {
    if (!loading && data) {
      setImage(data.thumbnail);
    }
  }, [loading, data]);

  if (loading || !data) {
    return <Loader />;
  }

  const handleImageClick = (event) => {
    setImage(event.target.src);
  };

  return (
    <main className="mb-auto mx-4 lg:m-auto lg:mx-auto md:max-w-screen-xl lg:max-w-screen-2xl pt-6">
      <button onClick={() => history.back()} className="underline">
        Go Back
      </button>
      <div className=" mt-10">
        <small>
          {data.brand} / {data.category}
        </small>
        <h1 className="text-3xl md:text-4xl">{data.title}</h1>
        <p className="flex m-auto align-middle gap-3 mb-6">
          <FaStar className="flex my-auto text-yellow-500 align-middle" />{" "}
          {data.rating}
        </p>
      </div>
      <div className="m-auto md:flex gap-10 md:max-w-screen-lg ">
        <div className="flex-1 max-w-xl m-auto md:m-0">
          <img
            src={image}
            alt={data.title}
            className="object-cover m-auto w-full max-h-96 overflow-scroll "
          />

          <div className="flex max-w-full">
            {data.images &&
              data.images.map((image, i) => (
                <div
                  key={i}
                  className="h-20 m-auto overflow-scroll align-middle flex gap-4 cursor-pointer"
                >
                  <img
                    className="object-cover"
                    src={image}
                    onClick={(event) => handleImageClick(event)}
                  ></img>
                </div>
              ))}
          </div>
        </div>
        <div className="px-4 md:px-10md:p-0 flex-1 mx-auto max-w-md mt-6">
          <p className="mb-6">{data.description}</p>
          <div className="sm:flex justify-between mb-10">
            <div className="flex gap-3 align-middle ">
              <p className="font-semibold text-2xl text-red-500 ">
                {currencyFormat(data.price)}
              </p>
              <var className="m-auto ">{data.discountPercentage}% off</var>
            </div>
            <div>
              <p>In Stock: {data.stock}</p>
            </div>
          </div>
          <div className="flex">
            <AddToCartBtn data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
