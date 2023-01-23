import React from "react";
import { skills_list } from "../data/data";

const Skills = () => {
  
  return (
    <div className="mb-10 dark:text-white pt-10">
      <h3 className="mt-10 mb-4 text-3xl font-semibold flex justify-center">Skills</h3>
      <div className="">
        <section className="flex flex-wrap justify-evenly gap-6 max-w-xl  m-auto">
          {skills_list.map((elem) => {
            return (
              <div
                key={elem.id}
                className="bg-gradient-to-b from-teal-800 to-teal-600 text-white flex justify-center items-center shadow-lg rounded-lg mt-5 w-28 m-1 py-1"
              >
                {elem.name}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
export default Skills;
