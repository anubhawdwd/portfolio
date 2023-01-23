import React from "react";
import { UseGlobalContext } from "../data/contextAPI/GlobalState";

const ProjectCategory = () => {
  const { MenuItems, MenuChange, ActiveBtnStyle } = UseGlobalContext();
  
  return (
    <>
      <nav className=" mt-6  flex justify-center px-0 sm:justify-center items-center dark:text-white">
        
        {MenuItems.map((item, index) => {
          return (
            <ul
              key={index}
              className={`h-8 w-24 sm:w-32 flex justify-center items-center text-s sm:text-l md:text-xl capitalize mx-1  px-3 cursor-pointer rounded-xl  font-semibold duration-1000 bg-black text-white shadow-md  ${
                ActiveBtnStyle(index)
              }
              `}
              onClick={() => MenuChange(item)}
            >
              {item}
            </ul>
          );
        })}
      </nav>
    </>
  );
};

export default ProjectCategory;
