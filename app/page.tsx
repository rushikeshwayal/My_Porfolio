import Hero from "@/components/custome/Hero";
import { ModeToggle } from "@/components/custome/ModeToggle";
import NumberCount from "@/components/custome/NumberCount";
import TextRevel from "@/components/custome/TextRevel";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      
<Hero />  
<NumberCount />
<TextRevel />
      <div className="flex justify-start fixed bottom-4 left-4">
            <ModeToggle />
          </div>
    </div>
  );
}
