import { NumberTicker } from "../magicui/number-ticker";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
export default function NumberCount() {

    return (    
        <div className="relative overflow-hidden font-glacial h-96 bg-gradient-to-t from-black to-transparent">
            <div className="flex justify-around items-center  text-center w-full">
                <div>
                <p
        className="whitespace-pre-wrap text-6xl font-semibold tracking-tighter text-black dark:text-white"
        >
        <NumberTicker
        value={100}
        />+
        </p>
        <h1 className="text-green-400 font-semibold">Projects</h1>
        </div>
        <div>
                <p
        className="whitespace-pre-wrap text-6xl font-semibold tracking-tighter text-black dark:text-white"
        >
        <NumberTicker
        value={80}
        />+
        </p>
        <h1 className="text-green-400 font-semibold">Clients</h1>
        </div>
        <div>
                <p
        className="whitespace-pre-wrap text-6xl font-semibold tracking-tighter text-black dark:text-white"
        >
        <NumberTicker
        value={11}
        />+
        </p>
        <h1 className="text-green-400 font-semibold">Achievements</h1>
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

            )
            }