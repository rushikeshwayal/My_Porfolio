"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

const Experience = () => {
    const { theme } = useTheme();

    const experienceData = [
        {
            role: "AI/ML Developer Intern",
            company: "Datamatter",
            duration: "Nov 2024 – Present",
            details: [
                "Designing and implementing intelligent AI agents and scalable backend systems using FastAPI.",
                "Simplifying workflows by 30% and reducing manual coding and processing by 45%.",
                "Gaining practical experience in machine learning workflows, model deployment, and real-world AI integration.",
            ],
        },
        // Add more experiences here as needed
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div
            className={cn(
                "relative min-h-screen flex flex-col justify-center py-16 px-6 sm:px-28 font-glacial",
                theme === "dark"
                    ? "bg-gradient-to-b from-black/10 to-black/10"
                    : "bg-gradient-to-b from-white to-white"
            )}
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-green-400 mb-10"
            >
                Experience
            </motion.h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-12"
            >
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-white dark:bg-black border border-slate-200 dark:border-slate-700 shadow-md rounded-xl p-6"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">
                                    {exp.role}
                                </h2>
                                <h3 className="text-md sm:text-lg text-slate-600 dark:text-slate-400">
                                    {exp.company}
                                </h3>
                            </div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                                {exp.duration}
                            </span>
                        </div>
                        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2">
                            {exp.details.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray="4 2"
                className="absolute inset-0 -z-10 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
            />
        </div>
    );
};

export default Experience;
