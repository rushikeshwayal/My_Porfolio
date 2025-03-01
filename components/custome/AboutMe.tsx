"use client"; // Required for animations and interactivity

import Image from 'next/image';
import me from '../../public/meeee.png';
import X from '../../public/logo.svg';
import youtubeLogo from '../../public/youtube-6.svg';
import githubLogo from '../../public/github-mark-white.svg';
import linkedinLogo from '../../public/linkedin-icon-2.svg';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <div id='AboutMe' className='flex flex-col md:flex-row justify-center items-center min-h-screen bg-black text-white p-8 font-glacial'>
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-0 md:mr-12"
      >
        <Image
          src={me}
          alt="hero"
          width={400}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-green-400">Rushikesh Wayal</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          Building beyond boundaries, transforming ideas into incredible realities.
        </p>
        <p className="text-base sm:text-lg text-gray-400 mb-8">
        I am passionate about creating innovative solutions
and continuously exploring new technologies.
Proficient in multiple programming languages and
frameworks, I aim to leverage my skills to contribute to
impactful projects and further my learning in the field.  </p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start space-x-6"
        >
          <a href="https://github.com/rushikeshwayal" target="_blank" rel="noopener noreferrer">
            <Image src={githubLogo} alt="github" width={32} height={32} className="hover:opacity-75 transition-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/rushikeshwayal/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedinLogo} alt="linkedin" width={32} height={32} className="hover:opacity-75 transition-opacity" />
          </a>
          <a href="https://www.youtube.com/@RushikeshWayal_" target="_blank" rel="noopener noreferrer">
            <Image src={youtubeLogo} alt="youtube" width={32} height={32} className="hover:opacity-75 transition-opacity" />
          </a>
          <a href="https://x.com/Rushikesh_7_11" target="_blank" rel="noopener noreferrer">
            <Image src={X} alt="X" width={28} height={28} className="hover:opacity-75 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}