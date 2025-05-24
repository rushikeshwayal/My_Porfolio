"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiPython,
    SiPostgresql,
    SiFirebase,
    SiTypescript,
    SiGit,
    SiFramer,
    SiOpenai,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiMarkdown,
    SiIntellijidea,
    SiExpress,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiLangchain,
    SiFastapi,
    SiCplusplus,
    SiV,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import GridPattern from "@/components/ui/grid-pattern";

const skills = {
    Languages: [
        { name: "Python", icon: SiPython },
        { name: "Java", icon: SiV },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "C++", icon: SiCplusplus },
    ],
    Frontend: [
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    Backend: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
        { name: "SQL", icon: FaDatabase },
    ],
    AIML: [
        { name: "Python", icon: SiPython },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "LangChain", icon: SiLangchain },
        { name: "OpenAI", icon: SiOpenai },
    ],
    Tools: [
        { name: "Git", icon: SiGit },
        { name: "VS Code", icon: VscVscode },
        { name: "IntelliJ IDEA", icon: SiIntellijidea },
        { name: "Markdown", icon: SiMarkdown },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Java", icon: FaJava },
    ],
};

export default function Skills() {
    const { theme } = useTheme();

    return (
        <div
            className={cn(
                "relative flex justify-center items-center flex-col px-6 sm:px-28 font-glacial min-h- pb-20",
                theme === "dark"
                    ? "bg-gradient-to-b from-transparent to-black/80"
                    : "bg-gradient-to-b from-white to-gray-100"
            )}
        >
            {/* 🔳 Grid Background Pattern */}
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] absolute inset-0 -z-10"
                )}
            />

            {/* 🚀 Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-green-400 mb-12 text-center"
            >
                My Tech Stack
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {Object.entries(skills).map(([category, techList], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                            {category}
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {techList.map(({ name, icon: Icon }) => (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    key={name}
                                    className="flex items-center gap-2 bg-white dark:bg-black border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg shadow"
                                >
                                    <Icon className="text-xl text-green-400" />
                                    <span className="text-slate-800 dark:text-white">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
