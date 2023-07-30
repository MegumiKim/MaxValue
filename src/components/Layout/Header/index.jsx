import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaUser, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../../context/Context.jsx";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full p-4 mb-5">
      <div className="md:max-w-screen-lg mx-auto lg:px-0 sm:flex sm:justify-between sticky top-0 z-10 ">
        <div className="flex justify-between">
          <Link to="/" className="me-5 text-2xl md:text-5xl logo">
            MaxValue
          </Link>
          <div className="flex my-auto gap-3 text-xl">
            <Link className="my-auto align-text-top">
              <FaUser />
            </Link>
            <Link to="/cart">
              <FaCartPlus />
            </Link>
            <button onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
        <div className="m-auto flex justify-center sm:mx-0">
          <input
            placeholder="Search"
            type="text"
            className="w-full mt-4 indent-2 sm:mt-0 border-slate-900 border-2 border-solid rounded dark:bg-slate-700 dark:border-none"
          />
        </div>
      </div>
    </header>
  );
}
