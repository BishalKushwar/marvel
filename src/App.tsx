import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Phases from './components/Phases';
import Characters from './components/Characters';
import Timeline from './components/Timeline';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = ['hero', 'phases', 'characters', 'timeline'];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MusicPlayer />
            
            <div id="hero">
              <Hero />
            </div>
            
            <div id="phases">
              <Phases />
            </div>
            
            <div id="characters">
              <Characters />
            </div>
            
            <div id="timeline">
              <Timeline />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;