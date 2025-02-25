import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Volume2, VolumeX, ChevronDown, Zap, Sword, Crown, Heart, Target, Star, Flame, Cloud, Compass, Film, Menu, X, Award } from 'lucide-react';
import Music from './avengers.mp3';

const heroes = [
  {
    name: "Iron Man",
    image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800",
    description: "Genius. Billionaire. Philanthropist.",
    color: "from-red-600 to-yellow-500",
    icon: <Zap className="w-6 h-6" />,
    year: "2008"
  },
  {
    name: "Captain America",
    image: "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?auto=format&fit=crop&q=80&w=800",
    description: "The First Avenger",
    color: "from-blue-600 to-red-500",
    icon: <Shield className="w-6 h-6" />,
    year: "2011"
  },
  {
    name: "Thor",
    image: "https://images.unsplash.com/photo-1556611832-c5f358b0057e?auto=format&fit=crop&q=80&w=800",
    description: "God of Thunder",
    color: "from-blue-400 to-purple-500",
    icon: <Cloud className="w-6 h-6" />,
    year: "2011"
  },
  {
    name: "Black Widow",
    image: "https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?auto=format&fit=crop&q=80&w=800",
    description: "Master Spy",
    color: "from-red-500 to-gray-900",
    icon: <Target className="w-6 h-6" />,
    year: "2010"
  },
  {
    name: "Hawkeye",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    description: "Master Marksman",
    color: "from-purple-600 to-violet-900",
    icon: <Target className="w-6 h-6" />,
    year: "2011"
  },
  {
    name: "Hulk",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    description: "Strongest There Is",
    color: "from-green-500 to-green-800",
    icon: <Flame className="w-6 h-6" />,
    year: "2008"
  },
  {
    name: "Doctor Strange",
    image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=800",
    description: "Master of the Mystic Arts",
    color: "from-orange-500 to-red-700",
    icon: <Crown className="w-6 h-6" />,
    year: "2016"
  },
  {
    name: "Black Panther",
    image: "https://images.unsplash.com/photo-1599033580159-6d6800f20857?auto=format&fit=crop&q=80&w=800",
    description: "King of Wakanda",
    color: "from-purple-900 to-gray-900",
    icon: <Crown className="w-6 h-6" />,
    year: "2016"
  },
  {
    name: "Spider-Man",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800",
    description: "Friendly Neighborhood Hero",
    color: "from-red-600 to-blue-700",
    icon: <Compass className="w-6 h-6" />,
    year: "2016"
  }
];

const movies = [
  {
    title: "Iron Man",
    year: 2008,
    image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&q=80&w=800",
    description: "The movie that started it all. Tony Stark becomes Iron Man.",
    color: "from-red-600 to-yellow-500"
  },
  {
    title: "The Avengers",
    year: 2012,
    image: "https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?auto=format&fit=crop&q=80&w=800",
    description: "Earth's mightiest heroes must come together to save the world.",
    color: "from-blue-600 to-red-500"
  },
  {
    title: "Avengers: Age of Ultron",
    year: 2015,
    image: "https://images.unsplash.com/photo-1608889825271-9696283ab804?auto=format&fit=crop&q=80&w=800",
    description: "The Avengers face off against an artificial intelligence gone rogue.",
    color: "from-gray-600 to-red-500"
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
    image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?auto=format&fit=crop&q=80&w=800",
    description: "Thanos seeks to collect all six Infinity Stones.",
    color: "from-purple-600 to-orange-500"
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    image: "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?auto=format&fit=crop&q=80&w=800",
    description: "The epic conclusion to the Infinity Saga.",
    color: "from-blue-600 to-purple-500"
  }
];

const actors = [
  {
    name: "Robert Downey Jr.",
    role: "Tony Stark / Iron Man",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?auto=format&fit=crop&q=80&w=800",
    description: "The genius billionaire who started it all. RDJ's portrayal of Tony Stark defined the MCU.",
    awards: "Multiple People's Choice Awards",
    color: "from-red-600 to-yellow-500"
  },
  {
    name: "Chris Evans",
    role: "Steve Rogers / Captain America",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=800",
    description: "The moral compass of the Avengers. Evans brought the perfect balance of strength and heart to Cap.",
    awards: "Teen Choice Award for Choice Movie Actor",
    color: "from-blue-600 to-red-500"
  },
  {
    name: "Scarlett Johansson",
    role: "Natasha Romanoff / Black Widow",
    image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=80&w=800",
    description: "The super spy who proved herself a true hero. Johansson's Natasha was both fierce and vulnerable.",
    awards: "BAFTA Award Nominee",
    color: "from-red-500 to-gray-900"
  },
  {
    name: "Chris Hemsworth",
    role: "Thor",
    image: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&q=80&w=800",
    description: "The God of Thunder who learned humility. Hemsworth brought both might and humor to Thor.",
    awards: "People's Choice Award Winner",
    color: "from-blue-400 to-purple-500"
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-950/90 to-red-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Avengers
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-500 transition-colors">Home</a>
              <a href="#heroes" className="text-white hover:text-red-500 transition-colors">Heroes</a>
              <a href="#movies" className="text-white hover:text-red-500 transition-colors">Movies</a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#heroes"
                  className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Heroes
                </a>
                <a
                  href="#movies"
                  className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Movies
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'heroes', 'movies', 'actors'];
  const timeoutRef = useRef<NodeJS.Timeout>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
        const element = document.getElementById(sections[nextSection]);
        element?.scrollIntoView({ behavior: 'smooth' });
        startAutoScroll();
      }, 10000); // Change section every 10 seconds
    };

    startAutoScroll();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-red-950 to-blue-950 text-white overflow-x-hidden">
      <Navbar />
      
      {/* Sound Control */}
      <motion.button
        className="fixed top-4 right-4 z-50 bg-red-600 p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </motion.button>

      {/* Hero Section */}
      <motion.header 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center pt-16"
      >
        <motion.div 
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-blue-900/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </motion.div>
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30" />
        </motion.div>
        <div className="z-10 text-center">
          <motion.div
            initial={{ y: -50, rotate: 0 }}
            animate={{ y: 0, rotate: 360 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <Shield className="w-24 h-24 mx-auto mb-6 text-red-500" />
          </motion.div>
          <motion.h1 
            className="text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            AVENGERS ASSEMBLE
          </motion.h1>
          <motion.p 
            className="text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Earth's Mightiest Heroes
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </motion.header>

      {/* Heroes Grid Section */}
      <section id="heroes" className="py-20 px-8 bg-gradient-to-b from-blue-950/50 via-red-950/50 to-blue-950/50 backdrop-blur-lg min-h-screen relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-600/10 via-blue-600/10 to-transparent" />
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet The Team
        </motion.h2>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto mb-20 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-blue-600 to-red-600" />
          {Array.from(new Set(heroes.map(h => h.year))).sort().map((year, index) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-red-600 to-blue-600 px-6 py-2 rounded-full text-lg font-bold">
                  {year}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {heroes.filter(h => h.year === year).map((hero, heroIndex) => (
                  <motion.div
                    key={hero.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: heroIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-blue-950/90 to-red-950/90 rounded-lg overflow-hidden shadow-lg">
                      <div className="relative h-48">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${hero.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                        />
                        <img 
                          src={hero.image} 
                          alt={hero.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                          {hero.icon}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-1">{hero.name}</h3>
                        <p className="text-sm text-gray-300">{hero.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Movies Section */}
      <section id="movies" className="py-20 px-8 bg-gradient-to-b from-blue-950/50 via-red-950/50 to-blue-950/50 backdrop-blur-lg relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-600/10 via-blue-600/10 to-transparent" />
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Movies
        </motion.h2>

        {/* Movies Timeline */}
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-blue-600 to-red-600" />
          {movies.map((movie, index) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  className="bg-gradient-to-br from-blue-950/90 to-red-950/90 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${movie.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                      <Film className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{movie.title}</h3>
                      <span className="text-sm bg-gradient-to-r from-red-600 to-blue-600 px-3 py-1 rounded-full">
                        {movie.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">{movie.description}</p>
                  </div>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-full mt-32" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Actors Section */}
      <section id="actors" className="py-20 px-8 bg-gradient-to-b from-blue-950/50 via-red-950/50 to-blue-950/50 backdrop-blur-lg relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-600/10 via-blue-600/10 to-transparent" />
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Cast
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          {actors.map((actor, index) => (
            <motion.div
              key={actor.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center justify-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 px-8">
                <motion.div
                  className="bg-gradient-to-br from-blue-950/90 to-red-950/90 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-96">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${actor.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <img 
                      src={actor.image} 
                      alt={actor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="w-1/2 px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                    {actor.name}
                  </h3>
                  <p className="text-xl text-gray-300">{actor.role}</p>
                  <p className="text-gray-400">{actor.description}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500">{actor.awards}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;