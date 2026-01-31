"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/HeroNew";
import About from "@/components/sections/AboutNew";
import Skills from "@/components/sections/SkillsNew";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/ProjectsNew";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto particles-bg">
        <div className="w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <div className="max-w-7xl mx-auto px-5 sm:px-10">
            <About />
            {/* Section Divider */}
            <div className="section-divider" />
            <Skills />
            {/* Section Divider */}
            <div className="section-divider" />
            <Experience />
            {/* Section Divider */}
            <div className="section-divider" />
            <Projects />
            {/* Section Divider */}
            <div className="section-divider" />
            <Testimonials />
            {/* Section Divider */}
            <div className="section-divider" />
            <Contact />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
