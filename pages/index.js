import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#50C878]/80">
      <Head>
        <title>Markus Wiland Portfolio</title>
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Skills */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Contact */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
