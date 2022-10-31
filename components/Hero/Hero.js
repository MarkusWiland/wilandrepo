import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hej, mitt namn är Markus Wiland", "<LovesToCode />"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 150,
  });
  return (
    <main className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Image
        src="/hej.jpg"
        width={200}
        height={200}
        className="rounded-full object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Front End Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">{text}</h1>
      </div>
      <div>
        <Link href="#about">
          <button className="heroButton">Om Mig</button>
        </Link>
        <Link href="#project">
          <button className="heroButton">Projekt</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Kontakta mig</button>
        </Link>
      </div>
    </main>
  );
}
