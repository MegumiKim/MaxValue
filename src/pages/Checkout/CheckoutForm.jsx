import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "./formValidation";
import { btnPrimary, btnStyles } from "../../styles/tailwindClasses";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/zustand";
import { useUserInfoStore } from "../../store/userInfoStore.js";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const userInfo = useUserInfoStore((state) => state.setUserInfo);
  const clearCart = useStore((state) => state.clearCart);

  console.log(userInfo);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  function onSubmit(data) {
    userInfo(data);
    setIsValid(true);
    reset();
    clearCart();
    useStore.persist.clearStorage;
    navigate("/confirmation");
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md flex-1"
    >
      <fieldset>
        <legend className=" text-2xl mb-6">Payment Details</legend>
        <div className="form-field">
          <div>
            <label htmlFor="">Full Name</label>
            <input
              className="dark:bg-slate-700 dark:border-none"
              type="text"
              placeholder="full name"
              {...register("name")}
            />
          </div>
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-field">
          <div>
            <label htmlFor="">Email</label>
            <input
              className="dark:bg-slate-700 dark:border-none"
              type="email"
              placeholder="email"
              {...register("email")}
            />
          </div>
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-field">
          <div>
            <label htmlFor="">Address</label>
            <input
              className="dark:bg-slate-700 dark:border-none"
              type="text"
              placeholder="address"
              {...register("address")}
            />
          </div>
          <p className="error">{errors.address?.message}</p>
        </div>
        <div className="form-field">
          <div>
            <label htmlFor="">credit card number</label>
            <input
              type="tel"
              placeholder="credit card number"
              {...register("cc")}
              className="dark:bg-slate-700 dark:border-none"
            />
          </div>
          <p className="error">{errors.cc?.message}</p>
        </div>

        <div className="flex">
          <button className="btn-primary text-white mt-6 mx-auto">
            Confirm & Buy
          </button>
        </div>
      </fieldset>
    </form>
  );
}
