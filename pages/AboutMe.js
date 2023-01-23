import React from "react";
import Image from "next/image";
import anubhaw from "../public/img/anubhaw-blue.png";
// import anubhaw_2 from "../public/img/anubhaw-pink.png";
import anubhaw_1 from "../public/img/anubhaw.jpeg";
import anubhaw_sign_yellow from "../public/signature/anubhaw_sign_yellow.png";
import anubhaw_sign_black from "../public/signature/anubhaw_sign_black.png";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { UseGlobalContext } from "../data/contextAPI/GlobalState";

function AboutMe() {
  const { darkMode } = UseGlobalContext();
  return (
    <>
      <div className=" text-center dark:text-white ">
        <div className="h-20"></div>
        <div className="rounded-[50%] w-48 h-48 mt-2 mx-auto overflow-hidden">
          {darkMode ? (
            <Image src={anubhaw} alt="Anubhaw Dwivedi" />
          ) : (
            <Image src={anubhaw_1} alt="Anubhaw Dwivedi" />
          )}
        </div>

        <h1 className="absolute text-5xl py-2 font-medium md:text-6xl z-[-10] ">
          Anubhaw Dwivedi
        </h1>
        {darkMode ? (
          <div className="w-80 h-24 mx-auto ">
            <Image src={anubhaw_sign_yellow} alt="Anubhaw Dwivedi" />
          </div>
        ) : (
          <div className="w-80 h-24 mx-auto ">
            <Image src={anubhaw_sign_black} alt="Anubhaw Dwivedi" />
          </div>
        )}
        <h2 className="text-2xl mt-3 md:text-3xl ">Front-End Developer</h2>
        <p className="text-md my-2  text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-white/80 ">
          Anubhaw is a Front-End Developer who has 2yrs of professional
          experience in building responsive web designs and interactive
          interfaces. He is proficient in HTML/CSS, and React JS for creating
          Single Page Applications.
        </p>
      </div>
      <h3 className="flex justify-center text-yellow-600 decoration-black dark:decoration-white decoration-wavy underline text-xl font-semibold ">
        Get In-Touch with Me
      </h3>
      <div className="text-5xl flex justify-center gap-5 py-3 text-black-300 -ml-12">
        <AiFillLinkedin
          onClick={() => window.open("https://www.linkedin.com/in/anubhawdwd/")}
          className="text-blue-600 cursor-pointer"
        />
        <AiFillGithub
          onClick={() => window.open("https://github.com/anubhawdwd")}
          className=" dark:text-white cursor-pointer"
        />
        <AiFillTwitterCircle
          onClick={() => window.open("https://twitter.com/anubhawdwd")}
          className="text-blue-400 cursor-pointer"
        />
        <AiOutlineWhatsApp
          onClick={() => window.open("https://wa.me/9456232279")}
          className="text-green-600 cursor-pointer"
        />
        <div>
          <a
            class=" block w-0 bg-white group"
            href="mailto:anubhawdwivedi@gmail.com?subject=Lets_Talk_about_New_Carrier_Opportunity&body=Hello!"
          >
            <CgMail className="text-red-500 text-5xl" />
            <div class="relative px-10">
              <div class="-mt-16">
                <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div class="p-2">
                    <p class="text-xs text-black dark:text-white">
                      Requires Default Mailing App
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
