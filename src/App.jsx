import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Academics from '@/components/Academics';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Creative Software Engineer </title>
        <meta name="description" content="A vibrant, creative software engineer portfolio showcasing full-stack projects, design skills, and technical expertise with a colorful, modern aesthetic." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground selection:bg-[#A259FF] selection:text-white transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Academics />
        <Experience />
        <Contact />
        <Toaster />
      </div>
    </>
  );
}

export default App;