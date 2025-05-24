"use client";
import React from 'react';
import WordRotate from "../ui/word-rotate";
import { RainbowButton } from '../ui/rainbow-button';
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import NavBar from './NavBar';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center items-center font-glacial">
        <NavBar />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen text-center w-full px-4 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center mb-10 space-y-4 sm:space-y-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-BespokeStencilBold mr-0 sm:mr-4">
            Hi there, I am
          </h1>

          <div className="w-fit min-w-[160px] sm:min-w-[200px] md:min-w-[250px] max-w-[80vw]">
            <WordRotate
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-400 font-BespokeStencilBold"
              words={["Rushikesh", "AI-ML Dev", "Web Dev"]}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 sm:mt-6 px-4"
        >
          <p className="text-base sm:text-lg md:text-xl max-w-xl text-gray-300 font-glacial">
            Exploring New Possibilities, Pushing Boundaries, and Crafting the Incredible
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center font-glacial"
        >
          <a
            href="https://www.linkedin.com/in/rushikeshwayal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RainbowButton>Let's Talk</RainbowButton>
          </a>

          <a
            href="https://drive.google.com/file/d/121Ll0N9VAgkSaMAvZyGjqoL30pFdEb2V/view?usp=sharingcle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RainbowButton>Download Resume</RainbowButton>
          </a>
        </motion.div>
      </div>

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 -z-10 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
