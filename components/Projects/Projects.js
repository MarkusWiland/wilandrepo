import Image from "next/image";
import React from "react";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
export default function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative overflow-hidden  md:flex-col  max-w-full  px-10 flex flex-col items-center justify-between mx-auto ">
      <h3 className="absolute top-36 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <div className="w-screen flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img src="/hej.jpg" height="200px" width="200px" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}: UPS CLONE
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                Detta är ett usp clonde teasd asdnasdasd ad nasd asd asdoaso
                sadfo iasdasdasldhu aausduasd asd asd asd asd asd qw eqw
                dasiodnajsfgasd asiofughsfio cuagduasf v iasdgaid
              </p>
              <div>
                <h3 className="pb-3 text-2xl">Byggt med</h3>
                <div className="flex space-x-3">
                  <span>
                    <SiNextdotjs size={30} />
                  </span>
                  <span>
                    <SiTailwindcss size={30} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </div>
  );
}
