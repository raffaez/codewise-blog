import { Popover } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  CodeBracketIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Navbar() {
  const toggleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setToggler(Moon);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setToggler(Sun);
    }
  };

  const Sun = (
    <div
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full hover:bg-gray-50 text-gray-50 hover:text-blue-600 flex justify-center items-center transition-all"
    >
      <SunIcon className="h-6 w-6 transition-all" />
    </div>
  );

  const Moon = (
    <div
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full hover:bg-blue-600 text-blue-600 hover:text-gray-50 flex justify-center items-center transition-all"
    >
      <MoonIcon className="h-6 w-6 transition-all" />
    </div>
  );

  const [toggler, setToggler] = useState<JSX.Element>();

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setToggler(Sun);
    } else {
      document.documentElement.classList.remove("dark");
      setToggler(Moon);
    }
  }, []);

  return (
    <Popover className="bg-inherit top-0 flex justify-between w-screen mx-auto z-20 items-center px-10 pt-5">
      <div className="w-9 h-9 text-blue-600 dark:text-gray-50">
        <CodeBracketIcon />
      </div>

      <nav className="hidden md:flex flex-row space-x-3">
        <div className="navItem">
          <Link to="/" className="group">
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-emerald-400"></span>
          </Link>
        </div>
        <div className="navItem">
          <Link to="/articles" className="group">
            Articles
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-emerald-400"></span>
          </Link>
        </div>
        <div className="navItem">
          <Link to="/about" className="group">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-emerald-400"></span>
          </Link>
        </div>
      </nav>

      <div className="-my-2 -mr-2 md:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg- p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <div className="items-center justify-end md:flex">
        <div className="cursor-pointer">{toggler}</div>
      </div>
    </Popover>
  );
}

export default Navbar;
