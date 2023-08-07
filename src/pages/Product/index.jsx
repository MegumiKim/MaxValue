import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../../hooks/api";
import { baseURL } from "../../hooks/constants";
import AddToCartBtn from "./AddToCartBtn";
import formattedNOK from "../../utils/currecyFormat";
import Loader from "../../components/ui/Loader";

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
    <main className="mx-6 lg:mx-auto min-h-screen md:max-w-screen-lg ">
      <button onClick={() => history.back()} className="underline">
        Go Back
      </button>
      <div className=" mt-10">
        <small>
          {data.brand} / {data.category}
        </small>
        <h1 className="text-3xl md:text-4xl mb-4">{data.title}</h1>
        <p>Rating: {data.rating}</p>
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
          <div className="flex justify-between mb-10">
            <div className="flex gap-3 align-middle ">
              <p className="font-semibold text-2xl text-red-500 ">
                {formattedNOK(data.price)}
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
