import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../../../context/Context.jsx";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="mx-auto w-full p-6 bg-white dark:bg-zinc-800 z-10 md:max-w-screen-xl lg:max-w-screen-2xl">
      <div className="md:max-w-screen-lg mx-auto lg:px-0 sm:flex sm:justify-between sticky top-0 z-10 ">
        <div className="flex justify-between w-full">
          <Link to="/" className="me-5 text-2xl md:text-5xl logo">
            MaxValue
          </Link>
          <div className="flex my-auto gap-3 text-xl">
            <button onClick={toggleTheme} aria-label="toggle dark mode">
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
