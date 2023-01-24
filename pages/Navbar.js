import React from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { UseGlobalContext } from "../data/contextAPI/GlobalState";

function Navbar() {
  const { darkMode, setDarkMode } = UseGlobalContext();
  return (
    <>
      <div className=" fixed px-2 md:px-12 lg:px-20 top-0 z-[10] w-full  bg-black ">
        <div className=" flex justify-center pt-4 ">
          <a href="#">
            <h1 className="text-2xl  sm:mx-8 font-bold text-pink-600 font-burtons cursor-pointer dark:text-red-600">
              Portfolio
            </h1>
          </a>
        </div>
        <div className=" relative flex justify-between  ">
          <ul className=" pt-1 flex justify-between ">
            <a href="#AboutMe">
              <li className="text-white text-xl font-semibold mx-2 cursor-pointer hover:text-cyan-700 hover:font-extrabold">
                Me
              </li>
            </a>
            <a href="#Skills">
              <li className="text-white text-xl font-semibold  mx-2 cursor-pointer hover:text-cyan-700 hover:font-extrabold ">
                Skills
              </li>
            </a>
            <a href="#Projects">
              <li className="text-white text-xl font-semibold  mx-2 cursor-pointer hover:text-cyan-700 hover:font-extrabold">
                Projects
              </li>
            </a>
          </ul>

          <ul className="flex items-center">
            <li>
              {darkMode ? (
                <BsSunFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-yellow-400"
                />
              ) : (
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-yellow-600"
                />
              )}
            </li>
            <li>
              <a
                className="bg-gradient-to-b from-cyan-700 to-cyan-400 text-white px-3 py-1 rounded-md ml-8 "
                href="/resume/Anubhaw_Resume.pdf"
                download="Anubhaw_Resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
