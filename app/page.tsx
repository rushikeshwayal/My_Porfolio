import AboutMe from "@/components/custome/AboutMe";
import Contact from "@/components/custome/Contact";
import Experience from "@/components/custome/Experience";
import Hero from "@/components/custome/Hero";
import { ModeToggle } from "@/components/custome/ModeToggle";
import NumberCount from "@/components/custome/NumberCount";
import Projects from "@/components/custome/Projects";
import Skills from "@/components/custome/Skill";
import TextRevel from "@/components/custome/TextRevel";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NumberCount />
      <TextRevel />
      <AboutMe />

      <div className="flex justify-start fixed bottom-4 left-4 z-50">
        <ModeToggle />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skill">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}
