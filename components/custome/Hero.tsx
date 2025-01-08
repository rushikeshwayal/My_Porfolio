import React from 'react'
import WordRotate from "../ui/word-rotate";
import  { RainbowButton }  from '../ui/rainbow-button';
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import NavBar from './NavBar';
// import ShinyButton from "@/components/ui/shiny-button";
export default function Hero() {
  return (





<div >
    <div className='flex justify-center'>
<NavBar />
</div>
<div className="hero-container flex flex-col items-center justify-center h-screen text-center">
      <div className="w-full flex flex-wrap justify-center mb-10 gap-10 items-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold  tracking-tight">
          Hi there, I am
        </h1>
        <div className=" w-[400px] " >
          <WordRotate
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-green-400"
            words={["Rushikesh", "AI-ML Engineer"]}
          />
        </div>
      </div>
      <div>
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl">
          AI Developer & Full Stack Developer
        </p>
      </div>
      <div className='mt-10 space-x-5'>
      {/* <ShinyButton>Shiny Button</ShinyButton> */}
      
      <RainbowButton>Lets Talk</RainbowButton>
       <RainbowButton>Download Resume</RainbowButton>
       </div>
    </div>
<GridPattern

  width={30}
  height={30}
  x={-1}
  y={-1}
  strokeDasharray={"4 2"}
  className={cn(
    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] -z-10",
  )}
/>
</div>
  );
}
