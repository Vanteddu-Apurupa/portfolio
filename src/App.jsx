import { useState, useEffect } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

import "./index.css"


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer to track scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAboutVisible(entry.isIntersecting),
      { threshold: 0.2 } // Trigger when 30% of About section is visible
    );
    const aboutSection = document.getElementById("projects");
    if (aboutSection) observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100 overflow-hidden`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="overflow-y-auto h-screen">
            <section id="home"><Home /></section>

            <section id="projects" className={`transition-opacity duration-700 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Projects />
            </section>
            <section id="skills">
              <Skills/>
            </section>
        <Education/>
        <Contact/>
        </div>
        

      </div>
    </>
  );
}

export default App;