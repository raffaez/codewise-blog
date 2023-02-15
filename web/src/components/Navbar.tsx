import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BookOpenIcon,
  CodeBracketIcon,
  HomeIcon,
  InformationCircleIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from "react";
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
      className="md:w-9 md:h-9 md:rounded-full md:hover:bg-gray-50 md:text-gray-50 md:hover:text-blue-600 md:flex md:justify-center items-center md:transition-all"
    >
      <SunIcon className="h-5 w-5 md:h-6 md:w-6 md:transition-all" />
    </div>
  );

  const Moon = (
    <div
      onClick={toggleTheme}
      className="md:w-9 md:h-9 md:rounded-full md:hover:bg-blue-600 md:text-blue-600 md:hover:text-gray-50 md:flex md:justify-center items-center md:transition-all"
    >
      <MoonIcon className="h-5 w-5 md:h-6 md:w-6 md:transition-all" />
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
        <Popover.Button className="inline-flex items-center justify-center rounded-full p-2 text-blue-600 hover:bg-blue-600 hover:text-gray-50 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-blue-600 transition-all">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <div className="hidden items-center justify-end md:flex">
        <div className="cursor-pointer">{toggler}</div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-0 "
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-600/10 dark:divide-gray-50/10 rounded-lg bg-gray-100 dark:bg-blue-900 shadow-lg">
            <div className="flex items-center justify-between px-5 pt-5 pb-6">
              <CodeBracketIcon className="w-9 h-9 text-blue-600 dark:text-gray-50" />
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 hover:bg-blue-600 text-blue-600 hover:text-gray-50 dark:hover:bg-gray-50 dark:text-gray-50 dark:hover:text-blue-600 rounded-full transition">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5 flex flex-col">
              <Popover.Button
                as={Link}
                to="/"
                className="navItem flex flex-row space-x-2 items-center"
              >
                <HomeIcon className="h-5 w-5" />
                <div>Home</div>
              </Popover.Button>
              <Popover.Button
                as={Link}
                to="/articles"
                className="navItem flex flex-row space-x-2 items-center"
              >
                <BookOpenIcon className="h-5 w-5" />
                <div>Articles</div>
              </Popover.Button>
              <Popover.Button
                as={Link}
                to="/about"
                className="navItem flex flex-row space-x-2 items-center"
              >
                <InformationCircleIcon className="h-5 w-5" />
                <div>About</div>
              </Popover.Button>
              <div
                className="navItem flex flex-row space-x-2 cursor-pointer items-center"
                onClick={toggleTheme}
              >
                {toggler}
                <div>
                  {localStorage.getItem("theme") == "dark"
                    ? "Light mode"
                    : "Dark mode"}
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navbar;
