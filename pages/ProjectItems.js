import React from "react";
import Image from "next/image";
import { UseGlobalContext } from "../data/contextAPI/GlobalState";

const ProjectItems = () => {
  const { projectData } = UseGlobalContext();
  return (
    <>
      <div className="flex flex-col gap-10 py-10 lg:flex-row flex-wrap">
        
        {projectData.map((elem) => {
          return (
            <div key={elem.id} className="mt-2 basis-1/3 flex-1 my-10 mx-auto">
              <div className="flex justify-center">
                <div className=" group rounded-xl [perspective:1000px]">
                  <div className=" relative h-[22rem] w-[25rem] rounded-xl shadow-xl  transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div className="absolute w-full h-full shadow-lg shadow-cyan-400/50 rounded-xl [backface-visibility:hidden]">
                      <Image
                        className="h-full w-full rounded-xl object-fit shadow-xl "
                        src={elem.img}
                        width="500"
                        height="350"
                        alt={elem.title}
                      />
                    </div>
                    <div className=" h-full w-full rounded-xl bg-black text-white [backface-visibility:hidden] [transform:rotateY(-180deg)]  transition-all duration-500 ">
                      <article className=" text-white w-full h-full rounded-xl bg-black dark:bg-white/5 shadow-md  shadow-red-500/50 group-hover:shadow-red-500 group-hover:shadow-inner ">
                        <h3 className="text-xl text-center underline decoration-wavy decoration-pink-500 pt-8">
                          Tech Stack
                        </h3>

                        <ul className="list-disc list-outside mx-12 ">
                          {elem.techStack.map((i, index) => {
                            return <li key={index}>{i}</li>;
                          })}
                        </ul>
                        <h3 className="text-xl text-center underline decoration-wavy decoration-pink-500 pt-2">
                          Brief
                        </h3>
                        <ul className="list-disc list-outside mx-12 ">
                          {elem.desc.map((i, index) => {
                            return <li key={index}>{i}</li>;
                          })}
                        </ul>
                        <div className=" flex justify-around mt-2 mb-2">
                          <button
                            onClick={() => {
                              window.open(`${elem.weblink}`);
                            }}
                            className="bg-yellow-600 text-black font-semibold p-2 rounded-lg w-24 cursor-pointer"
                          >
                            View Live
                          </button>
                          <button
                            onClick={() => window.open(`${elem.github}`)}
                            className="bg-yellow-600 text-black font-semibold p-2 rounded-lg  w-24"
                          >
                            Github
                          </button>
                        </div>
                      </article>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </>
  );
};

export default ProjectItems;
