import React from "react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="relative flex flex-col text-center md:text-left xl:flex-row maw-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>

      <div className="grid grid-cols-4 gap-3">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}
