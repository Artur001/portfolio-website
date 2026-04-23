import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Skills } from "@/components/Skills";
import { ProjectGrid } from "@/components/ProjectGrid";
import { AboutMe } from "@/components/AboutMe";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-8 py-8 relative">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto flex flex-col gap-24 py-16">
        <HeroSection />
        <Skills />
        <ProjectGrid />
        <AboutMe />
      </main>

      <Footer />
    </div>
  );
}
