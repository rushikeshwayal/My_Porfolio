"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import GridPattern from "@/components/ui/grid-pattern";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { desc } from "framer-motion/client";

export default function Projects() {
  const { theme } = useTheme();
  interface Project {
    title: string;
    description?: string;
    image?: string;
    link?: string;
  }
  const webProjects = [
    {
      title: "Pragati Track",
      description: `Designed and built Admin and Investigator panels for managing S&T and R&D projects under the Ministry
of Coal & CMPDI. Orchestrated the integration of multi-level approvals and real-time dashboards, cutting decision time by 30% and enabling financial tracking for 1000+ projects.
Enhanced execution by 40%, increased transparency by 60%, and reduced manual work by up to 80%.`,
      image:
        "/pragatiTrack.png",
      link: "#",
    },
    {
      title: "YourHR",
      description: `
      Engineered an AI agent using LLMs to auto-generate Python data cleanup and validation functions.
      Boosted data processing accuracy and cut manual coding effort by 70%.`,
      image:
        "./yourHR.png",
      link: "#",
    },
    {
      title: "Iv8.Tog",
      description: `
        Created a system to streamline the open-source contribution process by recommending GitHub repositoriesbased on users’ skills and experience.
        Simplified discovering and contributing to relevant projects by 40%, saving developers over 45% of their time.
      `,
      image:
        "./iv8.png",
      link: "#",
    },
    {
      title: "Inventory-Management",
      description: `
      Automated inventory management for municipal corporations, reduced manual work by 70%..
      Optimized real-time inventory tracking and shelf-life monitoring across 20+ departments, improving accuracy by 35% and streamlining role-based permission management`,
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },

    { title: "Emoji.io" },
    { title: "Grow (Ecommers-App)" },
    { title: "QR-code-generator" },
    { title: "Amazon-Clone" },
    { title: "Flix Movie App" },
    { title: "chucknorris_jokes" },
  ];
  const aiMlProjects = [
    {
      title: "AI Agent Function Generator",
      description: `
      Engineered an AI agent using LLMs to auto-generate Python data cleanup and validation functions.
      Boosted data processing accuracy and cut manual coding effort by 70%.`,
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: " Movie Recommendation System",
      description: `
      Implemented a system suggesting movies based on user-selected preferences including genre, ratings, and metadata.
      Elevated user satisfaction scores by 30% by delivering personalized movie recommendations`,
      image:
        "MovieRec.png",
      link: "#",
    }
  ];

  const renderCard = (project: Project) => {
    if (project.description && project.image) {
      return (
        <div className="flex flex-col bg-white dark:bg-black shadow-xl border border-slate-200 dark:border-slate-700 rounded-lg w-full h-[28rem] p-4">
          <div className="h-44 overflow-hidden rounded-md mb-4 flex-shrink-0">
            <img
              src={project.image}
              alt="card-image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex-grow">
            <h6 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              {project.title}
            </h6>
            <p className="text-sm font-light text-slate-600 dark:text-slate-300 whitespace-pre-line overflow-hidden">
              {project.description}
            </p>
          </div>
          <div className="pt-4">
            <a
              href={project.link}
              className="inline-block rounded-md bg-green-500 py-2 px-4 text-sm text-white shadow hover:bg-green-600 transition"
            >
              Open
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center text-center border border-gray-200 dark:border-gray-600 rounded-lg w-full h-[28rem] bg-white dark:bg-black text-slate-800 dark:text-white shadow p-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
      );
    }
  };

  const renderCarousel = (title: string, projects: Project[]) => (
    <div className="mb-16">
      <h1 className="pl-6 sm:pl-28 font-glacial font-bold text-3xl sm:text-4xl p-6 text-green-400 bg-clip-text">
        {title}
      </h1>
      <div className="flex justify-center items-center">
        <Carousel opts={{ align: "start" }} className="w-[90%] h-[30rem]">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={`${title}-${index}`}
                className="md:basis-1/2 lg:basis-1/3 px-4"
              >
                {renderCard(project)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden min-h-screen font-glacial flex flex-col justify-center",
        theme === "dark"
          ? "bg-gradient-to-b from-black to-transparent"
          : "bg-gradient-to-b from-white to-transparent"
      )}
    >
      {renderCarousel("Web Projects", webProjects)}
      {renderCarousel("AIML Projects", aiMlProjects)}

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] -z-10"
        )}
      />
    </div>
  );
}
