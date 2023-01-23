import React from "react";
import { UseGlobalContext } from "../data/contextAPI/GlobalState";
import ProjectCategory from "./ProjectCategory";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const { activeBtn } = UseGlobalContext();
  console.log(activeBtn);
  return (
    <>
      <div className="mt-10 pt-20 ">
        <h2 className="flex justify-center text-3xl font-semibold dark:text-white ">
          Projects
        </h2>
        <ProjectCategory />
        <ProjectItems />
      </div>
    </>
  );
};

export default Projects;
