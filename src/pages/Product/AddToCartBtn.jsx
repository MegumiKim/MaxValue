import React, { useState } from "react";
import { useStore } from "../../store/zustand";
import { Link, useNavigate } from "react-router-dom";
import formattedNOK from "../../utils/currecyFormat";
export default function AddToCartBtn(props) {
  const [itemAdded, setItemAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const data = props.data;
  const stock = data.stock;
  const productName = data.title;

  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(data, qty);
    setItemAdded(true);
  };

  return (
    <>
      {itemAdded ? (
        <div className="mx-auto flex flex-col md:block">
          <p className="dark:text-green-300 text-green-600 text-xl mt-5 p-2 rounded-lg">
            {productName} is added in Your Cart
          </p>

          <div className="my-4 flex flex-col gap-4">
            <button className="btn-primary" onClick={() => navigate("/cart")}>
              Check My Cart
            </button>
            <Link to="/" className="btn-outlined text-center dark:text-white">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-auto md:mx-0 w-full mb-5">
          <div className="flex justify-between">
            <form className="align-middle flex gap-4 my-4 w-min">
              <label className="align-middle text-center md:m-auto">Qty:</label>
              <input
                id="qty"
                type="number"
                placeholder="1"
                min="1"
                max={stock}
                className="w-20 dark:bg-slate-700 dark:border-none"
                onChange={(event) => setQty(parseInt(event.target.value))}
              />
            </form>
            <p className="my-auto dark:border-slate-600 pt-3 text-end">
              Sub Total: {formattedNOK(qty * data.price)}
            </p>
          </div>
          <button
            className="btn-primary w-full"
            onClick={(event) => handleAddToCart(event)}
          >
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
}
