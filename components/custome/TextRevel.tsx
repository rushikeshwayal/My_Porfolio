"use client";
import { TextReveal } from "../magicui/text-reveal";
import { cn } from "@/lib/utils";
import { GridPattern } from "../ui/grid-pattern";
import { useTheme } from "next-themes";
export default function TextRevel() {
    const { theme } = useTheme();
    return (
        <div className="font-glacial ">
            <TextReveal
                className={cn(
                    "transition-colors duration-300 ",
                    theme === "dark" ? "text-white" : "text-black" // Change text color dynamically
                )}
            >
                Building beyond boundaries,transforming ideas into incredible realities.
            </TextReveal>
        </div>
    );
}
