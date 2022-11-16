import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:markus.wiland@outlook.com?subject=${formData.subject}&body=Hej, jag heter ${formData.name}. ${formData.message},  (${formData.email})`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-around mx-auto items-center"
    >
      <motion.h3
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        Kontakta mig
      </motion.h3>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-10"
      >
        <h4 className="text-4xl font-semibold text-center">
          Jag har det du är ute efter.{" "}
          <span className="decoration-[#50C878]/50 underline">
            Låt oss diskutera.
          </span>
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#50C878] h-7 w-7 animate-pulse" />
          <p className="text-2xl">markus.wiland@outlook.com</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput"
              placeholder="Namn"
            />
            <input
              {...register("email")}
              type="email"
              className="contactInput"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            className="contactInput"
            placeholder="Titel"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Meddelande"
          />
          <button
            type="submit"
            className="bg-[#50C878] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Skicka
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
