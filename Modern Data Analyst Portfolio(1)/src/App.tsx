import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("hasVisitedPortfolio");
    if (visited) {
      setIsLoading(false);
      setHasVisited(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasVisited(true);
    localStorage.setItem("hasVisitedPortfolio", "true");
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isLoading && !hasVisited && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <Navigation />
          <div id="home">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="soft-skills">
            <SoftSkills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="journey">
            <Timeline />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
