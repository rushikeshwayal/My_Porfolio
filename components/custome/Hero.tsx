"use client"
import React from 'react';
import WordRotate from "../ui/word-rotate";
import { RainbowButton } from '../ui/rainbow-button';
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import NavBar from './NavBar';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden ">
      <div className="flex justify-center items-center font-glacial">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center h-screen text-center w-full">
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full flex items-center mb-10 justify-center"
>
  <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mr-4 font-BespokeStencilBold">
    Hi there, I am
  </h1>
  <div className="inline-block w-[200px] sm:w-[300px] md:w-[400px]">
    <WordRotate
      className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-green-400 font-BespokeStencilBold"
      words={["Rushikesh", "AI-ML Dev", "Web Dev"]}
    />
  </div>
</motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6"
        >
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-300 font-glacial">
          Exploring New Possibilities, Pushing Boundaries, and Crafting the Incredible
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-around w-2/6 font-glacial"
        >
          <a href='https://www.linkedin.com/in/rushikeshwayal/' target='_blank' rel="noopener noreferrer">
            <RainbowButton>Let's Talk</RainbowButton>
          </a>
          <a href='https://drive.google.com/file/d/1XySVu8w8LtnNkQ2nFhJpNoFYEOio3n9e/view?usp=sharing' target='_blank' rel="noopener noreferrer">
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
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] -z-10",
        )}
      />
    </div>
  );
}