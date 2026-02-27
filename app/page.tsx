"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/sections/Introduction";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Introduction");

  console.log("Active section:", activeSection);

  const renderSection = () => {
    switch (activeSection) {
      case "Introduction": return <Introduction />;
      case "About Me": return <AboutMe />;
      case "Projects": return <Projects />;
      case "Skills": return <Skills />;
      case "Experience": return <Experience />;
      case "Education": return <Education />;
      case "Interests": return <Interests />;
      case "Contact": return <Contact />;
      default: return <Introduction />;
    }
  };

  return (
  <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
    <Navbar setActiveSection={setActiveSection} />
    <div className="flex flex-1">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 ml-64 mt-14 px-16 py-10">
        {renderSection()}
      </main>
    </div>
  </div>
  );
}