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
          <a href='https://doc-0k-7o-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/8cohjelth5ovgf6atc1k2pgsujnqp5nu/ccfatp172dhdurg1oa0sejhe4takc66k/1740851550000/3/102913030142118951903/APznzaam-W8Td6d92wnbhhTGnIe1OkTkxsjwlRQJb_k5frHqY3B23t2v8qNHnz3wXQ7j9laJ08lpSirOlxKxwzTIPre47ciwgBy3tJegGc_YkPiR7s4QxE4ETTD3X7hz42bIM4xL0CwHJByPk4X57X8It_c_YNcYpGGEd7kZK-HTHvEPWnHitwZ_GZrai9nVO_3AYYFzLYPYtuNHXikITvGo-IeAfgxGLZ5cXIyxKISBrE4Sx3Wz8RlhmrnoON-I1ouWsW17HBNNYhZOz48U1ZSAuQiV2ZXxnujzhbRl9gzHALLvAvsmv-lCCRf5wuQCdlFM2V51uGEpp-BNqeEjvmmDtYYY71lK1raWgAokHsKsx-3ud4gJQeRO6jggJ-nICLrswWqmtRi2uvk_khVOi5bD0tCCzSt5ytblDM1NprX8dPQTlQgRLrv3NF4P0rpzNCKxUJJiotMUa4zmyMtH0jCuSjgmXBEzuOQixl8877IkfCK3uh6LfvM0tG15A-pytpbfC9OPDjqqc6iTKxe-I9mXVLB_gZY4BykaOZijQK5FMaca0TG_4MEzNOCpoTRvLiZ47vflaOXFzrbQG0huNCLL0ShNbsUQXvbjXQ_usvu0obvHJkwzB8BEr1SdRpfTL1BINLRgRDfoPABADjJsRHVULCZ-UUKRNYrZe3CwKBWILDex37CtRtYI00GY4QbUD1skV1LhxsZ1UtA9RUnZ0Nn-FTFFKjXnDOIq-BQskTonWRNGw9CpZueSPRYZtd6X1EG-EdB6UZlB_pTOfvNlLH81rniJe1yIWY2DK0astCD84XrwF7K3hJfCdiboEn7wOnr_ZnaEt4-Hwgq2oPubxiyhaDV1PIFKdeBvaaSZn2OgYnLzPFoQVTot1C4o1ZbrY3zMkE7pHyj3JybU64DG6c6jbR_sBSvNdUcPULce53r89Vvj2Rvo74fvzRT18BQKTqWAN4bGIGptWQ-zpHE5zinLP3mmEyuMnNbXYgbRGw7dx34mtLCjRuP5rqfy5DPQOFobPAjm6xHKdtcbnrpMr4XVs3c4Qn2GIos_9pgxf_9KNWtWFLSpSjlK8gEmPm4LcD_gAIA5aD-eiHvdgC6aWNXxylvn9Wt9LXNCA3LdlFmIuvz3L4zsMpomdXt7oVt9FJsDSJzaigRhHHRoGlYfQyRHuCxgNSdZE9T6xEFBqrUIqPtt7qXbGNkMR2PQjPQvWiwmesYFbnla7HQHOx38zyz1-yiLx9p5oz25-NDb5_barHjx9nxIXCYxVnZkDEC6uKh82tDLg27VomZet8IKHFCGoJEy8GGfpbrWCBUnnN8X-2-kSpF7ksIfi-2XCvwNfU4WeGEhUkUnACvc5ltqAk2burEX7nphYCD0nAO0SIUs6ry_P1lmR17PD_aMUe_1uIE7J1ycytQdUHGs2mUhukiIQlYlsDv-CcrH6thdeeQ8veNsgZtsX3VIDjJ2pX2yioy_0Uk042yFF_tYs7Y2788qr16Z4K6284zcTkPBooP5KwRt3ULcXJAqKnteBsNoCkhINn-hfTEqS0CyIMqpA-E3zoAo6pJlBL2ZlShBGLwEjRxYlG4jMccGEFpAimX-ejtzO9QpMk4ILKa1E1naaP5smVCrR1u1sL8yavkC68sESszrxDMETnqpX9WctWurWaAvhjJiAb77M61nF-jSJOtPr1nbFSZ_RYxi3Er9V6Pgx5xEzDxrUGL7aSy8mHmlmPpsSCeCmemmjKQQ-9z9b6TkJitT3shrW8soLdc3COU3rQU0Kf6kFLP-yFcyvCHZrlIB56Q8h9iM6jXuyIcIYUrimBniQrlcO1m6842JR6VkCFX4cSn9jelI4fPVoMNHP3uHpvO8uzLo1grAwtqpFX1Q7V47_UqrhxJG5GBmSdqqNKnCMoI8cTVPPR-GmNrI6Wif_ph2x91PRBTCu6aGWLzeg0YJR4Bk0a9wRLFR5DkNFBG0lejevYcb9b2OGZ9aWZvv8ABx2Ptl6OZPlVg3BlOCACq2ylofKtZBoTyLDv_BKPMHbENgGeihxPAqG_NMtq6oHoj6gV3n?authuser=0&nonce=b35h41n2dd0lu&user=102913030142118951903&hash=5em5tde9fpikmh3vakpf36dev488piad'
            target='_blank' rel="noopener noreferrer">
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