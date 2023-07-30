import React, { useState } from "react";
import { useStore } from "../../store/zustand";
import { useNavigate } from "react-router-dom";

export default function AddToCartBtn(props) {
  const [itemAdded, setItemAdded] = useState(false);
  const navigate = useNavigate();

  const data = props.data;
  const productName = data.title;
  console.log(productName);
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(data);
    setItemAdded(true);
  };

  return (
    <div className="mx-auto md:mx-0 flex flex-col md:block">
      {itemAdded ? (
        <div className="mx-auto md:mx-0 flex flex-col md:block">
          <p className="text-red-400 text-xl ">
            {productName} is Added in Your Bag
          </p>
          <button
            className="outline outline-red-400 text-white py-3 px-6 rounded-full my-4"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      ) : (
        <button
          className="bg-red-500 text-white py-3 px-6 rounded-full my-4"
          onClick={(event) => handleAddToCart(event)}
        >
          Add To Bag
        </button>
      )}
    </div>
  );
}
