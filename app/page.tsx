import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10
      px-5 max-w-full w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome />},
        ]} />
        <Hero />
        <Grid />  
      </div>
    </main>
  );
}
