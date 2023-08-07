import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "./formValidation";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/zustand";
import { useUserInfoStore } from "../../store/userInfoStore.js";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const userInfo = useUserInfoStore((state) => state.setUserInfo);
  const clearCart = useStore((state) => state.clearCart);

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
      className="mx-auto max-w-md"
    >
      <fieldset>
        <legend className=" text-2xl mb-6">Payment Details</legend>

        <label className="">
          <span className=" after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium  text-slate-700  dark:text-slate-400">
            Full Name
          </span>
          <input
            type="text"
            name="name"
            className="dark:bg-slate-700 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1 "
            placeholder="John Doe"
            {...register("name")}
          />
          <p className="error text-sm text-red-400 text-end p-2">
            {errors.name?.message}
          </p>
        </label>
        <label className="">
          <span className=" after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium  text-slate-700 dark:text-slate-400">
            Email
          </span>
          <input
            type="email"
            name="email"
            className="dark:bg-slate-700 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1 "
            placeholder="you@example.com"
            {...register("email")}
          />
          <p className="error text-sm text-red-400 text-end p-2">
            {errors.email?.message}
          </p>
        </label>
        <label className="">
          <span className=" after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium  text-slate-700 dark:text-slate-400">
            Delivery Address
          </span>
          <input
            type="text"
            name="address"
            className="dark:bg-slate-700 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1 "
            placeholder="Sesame Street 1"
            {...register("address")}
          />
          <p className="error text-sm text-red-400 text-end p-2">
            {errors.address?.message}
          </p>
        </label>
        <label className="">
          <span className=" after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium  text-slate-700 dark:text-slate-400">
            Credit Card Number
          </span>
          <input
            type="tel"
            name="cc"
            className="dark:bg-slate-700 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full rounded-md sm:text-sm focus:ring-1 "
            placeholder="1234567890"
            {...register("cc")}
          />
          <p className="error text-sm text-red-400 text-end p-2">
            {errors.cc?.message}
          </p>
        </label>

        <div className="flex">
          <button className="btn-primary text-white mt-6 mx-auto">
            Confirm & Buy
          </button>
        </div>
      </fieldset>
    </form>
  );
}
