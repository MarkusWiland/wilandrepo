import React from "react";

export default function Experience() {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h1>Experince</h1>
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
    </div>
  );
}
