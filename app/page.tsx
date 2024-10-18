"use client";

import { navItems } from "@/data";
import { useEffect } from 'react';

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('hashchange', handleScroll);
    handleScroll(); // Call it once on initial load
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <main className="relative bg-black-100 flex flex-col justify-between min-h-screen overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto flex-grow">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <div id="projects">
          <RecentProjects />
        </div>
        <div id="education">
          <Education />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
