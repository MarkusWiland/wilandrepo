import React from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
export default function About() {
  console.log(new Date(1666273387783));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-around mx-auto items-center"
    >
      <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500">
        Om Mig
      </h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        img
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h3 className="text-2xl	italic">Vem är jag?</h3>

        <div>
          <p>
            Jag jobbar som IT-konsult idag hos{" "}
            <span data-tip data-for="registerTip" className="italic underline">
              Garrison Consulting AB.
            </span>
          </p>
          <p>
            Jag är en driven person som tycker om att koda och skapa hemsidor.
          </p>
          <ReactTooltip
            id="registerTip"
            place="top"
            border={true}
            effect="solid"
            className="tooltip"
            borderColor="green"
          >
            Garrison Consulting AB är ett IT konsult bolag, där det jobbar runt
            30 personer totalt.
          </ReactTooltip>
        </div>
      </motion.div>
    </motion.div>
  );
}
