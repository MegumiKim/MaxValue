import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../../../context/Context.jsx";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full p-4 mb-5">
      <div className="md:max-w-screen-lg mx-auto lg:px-0 sm:flex sm:justify-between sticky top-0 z-10 ">
        <div className="flex justify-between w-full">
          <Link to="/" className="me-5 text-2xl md:text-5xl logo">
            MaxValue
          </Link>
          <div className="flex my-auto gap-3 text-xl">
            <button onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
