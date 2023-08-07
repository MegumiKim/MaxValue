import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../../../context/Context.jsx";
import CartIcon from "./CartIcon.jsx";
import SearchBar from "./SearchBar.jsx";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full h-20 bg-white dark:bg-zinc-800 z-10 p-4">
      <div className="md:max-w-screen-lg m-auto lg:px-0 sm:flex sm:justify-between ">
        <div className="flex justify-between w-full me-4">
          <Link to="/" className="me-5 text-2xl md:text-5xl logo">
            MaxValue
          </Link>
          <div className="flex my-auto gap-6 text-xl">
            <CartIcon />
            <button onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
        <div className="m-auto flex justify-center sm:mx-0">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
