"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <div>
            <hr />
            <footer className="relative w-full bg-black text-white py-16 px-6 sm:px-20 overflow-hidden font-glacial">

                {/* 🔳 Grid Background */}
                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className="absolute inset-0 -z-10 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
                />

                {/* 💬 Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-green-400 mb-10"
                >
                    Let's Connect
                </motion.h2>

                {/* 📬 Contact Details */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-base">
                    <ContactItem
                        icon={<FaEnvelope />}
                        text="rushikeshwayal6@gmail.com"
                        link="mailto:rushikeshwayal6@gmail.com"
                    />
                    <ContactItem
                        icon={<FaGithub />}
                        text="github.com/rushikesh"
                        link="https://github.com/rushikeshwayal"
                    />
                    <ContactItem
                        icon={<FaLinkedin />}
                        text="linkedin.com/in/rushikesh"
                        link="https://linkedin.com/in/rushikeshwayal"
                    />
                    <ContactItem
                        icon={<FaPhone />}
                        text="+91 9370327415"
                        link="tel:+919370327415"
                    />
                </div>

                {/* 👣 Footer Bottom */}
                <div className="mt-12 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Rushikesh Wayal. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

function ContactItem({
    icon,
    text,
    link,
}: {
    icon: React.ReactNode;
    text: string;
    link: string;
}) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-lg border border-gray-700 transition"
        >
            <span className="text-green-400 text-xl">{icon}</span>
            <span>{text}</span>
        </motion.a>
    );
}
