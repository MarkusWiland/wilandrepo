import { motion } from "framer-motion";
import React from "react";

export default function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/hej.jpg"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-28 xl:h-28 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p>100%</p>
        </div>
      </div>
    </div>
  );
}
