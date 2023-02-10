import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  FilmIcon,
  ListBulletIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { Input } from "postcss";

const categories = [
  {
    name: "All",
    icon: ListBulletIcon,
    href: "/articles",
  },
  {
    name: "Games",
    icon: PuzzlePieceIcon,
    href: "/articles/games",
  },
  {
    name: "Movies",
    icon: FilmIcon,
    href: "/articles/movies",
  },
  {
    name: "Technology",
    icon: ComputerDesktopIcon,
    href: "/articles/tech",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join("");
}

function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-[1124px] mx-auto px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">MyBlog</span>
              <img className="h-8 w-auto sm:h-10" src="/logo.png" />
            </a>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-5 md:flex">
            <a
              href="/"
              className="text-base font-poppins font-medium text-gray-600 hover:bg-purple-300 p-2 hover:text-gray-50 rounded-md transition ease-out duration-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-base font-poppins font-medium text-gray-600 hover:bg-purple-300 p-2 hover:text-gray-50 rounded-md transition ease-out duration-200"
            >
              About
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-600" : "text-purple-400",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium p-2 hover:text-purple-400 focus:outline-none"
                    )}
                  >
                    <span className="font-poppins">Categories</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-purple-400",
                        "h-5 w-5 ml-1 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {categories.map((category) => (
                          <a
                            key={category.name}
                            href={category.href}
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <category.icon
                              className="h-6 w-6 flex-shrink-0 text-purple-300"
                              aria-hidden
                            />
                            <p className="text-base font-medium text-gray-900 ml-4">
                              {category.name}
                            </p>
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
            <div className="relative mt-1 mr-2 rounded-md shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="block w-full text-base rounded-md border-gray-800 pl-7 pr-12 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
}

export default Navbar;
