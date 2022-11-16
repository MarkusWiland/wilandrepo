import React from "react";

export default function Experience() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-around mx-auto items-center">
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snaop-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <article className="flex flex-col rounded-l items-center">
          <h3>hej</h3>
          <p>heasdasdasd</p>
        </article>
        <article className="flex flex-col rounded-l items-center">
          <h3>hej</h3>
          <p>heasdasdasd</p>
        </article>
        <article className="flex flex-col rounded-l items-center">
          <h3>hej</h3>
          <p>heasdasdasd</p>
        </article>
      </div>
      <h1 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Experince
      </h1>
    </div>
  );
}
