import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../Footer";

export function OrderPageTemplate() {
  return (
    <div className="flex flex-col min-h-screen dark:text-gray-100 dark:bg-zinc-800">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
