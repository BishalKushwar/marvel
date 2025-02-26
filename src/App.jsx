import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroesSection from './components/HeroesSection';
import MoviesSection from './components/MoviesSection';
import ActorsSection from './components/ActorsSection';
import SoundButton from './components/SoundButton';
import Music from './assets/avengers.mp3';

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'heroes', 'movies', 'actors'];
  const timeoutRef = useRef(null);
  const audioRef = useRef(null);
  
  useEffect(() => {
    audioRef.current = new Audio(Music);
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  useEffect(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handle any errors that might occur during playback
        });
      }
    }
  }, [isMuted]);
  
  useEffect(() => {
    const startAutoScroll = () => {
      timeoutRef.current = setTimeout(() => {
        const nextSection = (currentSection + 1) % sections.length;
        setCurrentSection(nextSection);
        scrollToSection(sections[nextSection]);
        startAutoScroll();
      }, 30000); // Auto scroll every 30 seconds
    };
    
    startAutoScroll();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSection]);
  
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const handleNavClick = (index) => {
    setCurrentSection(index);
    scrollToSection(sections[index]);
    
    // Reset the auto-scroll timer when user manually navigates
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const nextSection = (index + 1) % sections.length;
        setCurrentSection(nextSection);
        scrollToSection(sections[nextSection]);
      }, 30000);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  return (
    <div className="App">
      <Navbar 
        currentSection={currentSection} 
        handleNavClick={handleNavClick}
      />
      <SoundButton 
        isMuted={isMuted} 
        toggleMute={toggleMute} 
      />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="heroes">
          <HeroesSection />
        </section>
        <section id="movies">
          <MoviesSection />
        </section>
        <section id="actors">
          <ActorsSection />
        </section>
      </main>
    </div>
  );
}

export default App;