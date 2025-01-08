import Hero from "@/components/custome/Hero";
import { ModeToggle } from "@/components/custome/ModeToggle";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      
<Hero />  
      <div className="flex justify-start absolute bottom-4 left-4">
            <ModeToggle />
          </div>
    </div>
  );
}
