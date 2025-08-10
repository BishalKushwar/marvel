import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Film, Star, Play, Award, Users } from 'lucide-react';

const timelineEvents = [
  { 
    year: "2008", 
    title: "Iron Man", 
    description: "Tony Stark becomes Iron Man and reveals his identity to the world", 
    phase: 1, 
    type: "movie",
    image: "https://pin.it/1nuPP1sem",
    boxOffice: "$585.8M",
    director: "Jon Favreau"
  },
  { 
    year: "2008", 
    title: "The Incredible Hulk", 
    description: "Bruce Banner struggles with his transformation while being hunted", 
    phase: 1, 
    type: "movie",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$264.8M",
    director: "Louis Leterrier"
  },
  { 
    year: "2010", 
    title: "Iron Man 2", 
    description: "Tony Stark faces government pressure and new enemies", 
    phase: 1, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$623.9M",
    director: "Jon Favreau"
  },
  { 
    year: "2011", 
    title: "Thor", 
    description: "The God of Thunder is banished to Earth and learns humility", 
    phase: 1, 
    type: "movie",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$449.3M",
    director: "Kenneth Branagh"
  },
  { 
    year: "2011", 
    title: "Captain America: The First Avenger", 
    description: "Steve Rogers becomes the First Avenger during WWII", 
    phase: 1, 
    type: "movie",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$370.6M",
    director: "Joe Johnston"
  },
  { 
    year: "2012", 
    title: "The Avengers", 
    description: "Earth's Mightiest Heroes assemble for the first time", 
    phase: 1, 
    type: "movie", 
    major: true,
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.519B",
    director: "Joss Whedon"
  },
  { 
    year: "2013", 
    title: "Iron Man 3", 
    description: "Tony Stark faces his greatest fear and the Mandarin", 
    phase: 2, 
    type: "movie",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.215B",
    director: "Shane Black"
  },
  { 
    year: "2013", 
    title: "Thor: The Dark World", 
    description: "Thor battles the Dark Elves to save the Nine Realms", 
    phase: 2, 
    type: "movie",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$644.8M",
    director: "Alan Taylor"
  },
  { 
    year: "2014", 
    title: "Captain America: The Winter Soldier", 
    description: "HYDRA is revealed within S.H.I.E.L.D.", 
    phase: 2, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$714.4M",
    director: "Russo Brothers"
  },
  { 
    year: "2014", 
    title: "Guardians of the Galaxy", 
    description: "A group of cosmic misfits become unlikely heroes", 
    phase: 2, 
    type: "movie",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$773.3M",
    director: "James Gunn"
  },
  { 
    year: "2015", 
    title: "Avengers: Age of Ultron", 
    description: "An AI created by Tony Stark threatens humanity", 
    phase: 2, 
    type: "movie", 
    major: true,
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.403B",
    director: "Joss Whedon"
  },
  { 
    year: "2015", 
    title: "Ant-Man", 
    description: "Scott Lang becomes the size-changing hero", 
    phase: 2, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$519.3M",
    director: "Peyton Reed"
  },
  { 
    year: "2016", 
    title: "Captain America: Civil War", 
    description: "The Avengers are divided over the Sokovia Accords", 
    phase: 3, 
    type: "movie", 
    major: true,
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.155B",
    director: "Russo Brothers"
  },
  { 
    year: "2016", 
    title: "Doctor Strange", 
    description: "A surgeon becomes the Master of the Mystic Arts", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$677.8M",
    director: "Scott Derrickson"
  },
  { 
    year: "2017", 
    title: "Guardians of the Galaxy Vol. 2", 
    description: "Peter Quill discovers his true parentage", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$863.8M",
    director: "James Gunn"
  },
  { 
    year: "2017", 
    title: "Spider-Man: Homecoming", 
    description: "Peter Parker balances high school and being Spider-Man", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$880.2M",
    director: "Jon Watts"
  },
  { 
    year: "2017", 
    title: "Thor: Ragnarok", 
    description: "Thor must prevent Ragnarok and save Asgard", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$854.0M",
    director: "Taika Waititi"
  },
  { 
    year: "2018", 
    title: "Black Panther", 
    description: "T'Challa becomes king of Wakanda and the Black Panther", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.347B",
    director: "Ryan Coogler"
  },
  { 
    year: "2018", 
    title: "Avengers: Infinity War", 
    description: "Thanos collects the Infinity Stones", 
    phase: 3, 
    type: "movie", 
    major: true,
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$2.048B",
    director: "Russo Brothers"
  },
  { 
    year: "2018", 
    title: "Ant-Man and the Wasp", 
    description: "Scott and Hope explore the Quantum Realm", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$622.7M",
    director: "Peyton Reed"
  },
  { 
    year: "2019", 
    title: "Captain Marvel", 
    description: "Carol Danvers becomes one of the universe's most powerful heroes", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.128B",
    director: "Anna Boden & Ryan Fleck"
  },
  { 
    year: "2019", 
    title: "Avengers: Endgame", 
    description: "The ultimate sacrifice to defeat Thanos", 
    phase: 3, 
    type: "movie", 
    major: true,
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$2.798B",
    director: "Russo Brothers"
  },
  { 
    year: "2019", 
    title: "Spider-Man: Far From Home", 
    description: "Peter Parker deals with the aftermath of Endgame", 
    phase: 3, 
    type: "movie",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.132B",
    director: "Jon Watts"
  },
  { 
    year: "2021", 
    title: "WandaVision", 
    description: "Wanda creates a reality where she and Vision live in suburban bliss", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "9 episodes",
    director: "Matt Shakman"
  },
  { 
    year: "2021", 
    title: "The Falcon and the Winter Soldier", 
    description: "Sam Wilson and Bucky Barnes team up", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "6 episodes",
    director: "Kari Skogland"
  },
  { 
    year: "2021", 
    title: "Loki", 
    description: "The God of Mischief encounters the Time Variance Authority", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "6 episodes",
    director: "Kate Herron"
  },
  { 
    year: "2021", 
    title: "Black Widow", 
    description: "Natasha Romanoff confronts her past", 
    phase: 4, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$379.8M",
    director: "Cate Shortland"
  },
  { 
    year: "2021", 
    title: "What If...?", 
    description: "Exploring alternate realities in the multiverse", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "9 episodes",
    director: "Bryan Andrews"
  },
  { 
    year: "2021", 
    title: "Shang-Chi and the Legend of the Ten Rings", 
    description: "Shang-Chi confronts his father and the Ten Rings organization", 
    phase: 4, 
    type: "movie",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$432.2M",
    director: "Destin Daniel Cretton"
  },
  { 
    year: "2021", 
    title: "Eternals", 
    description: "Ancient beings emerge to protect Earth from the Deviants", 
    phase: 4, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$402.1M",
    director: "Chloé Zhao"
  },
  { 
    year: "2021", 
    title: "Hawkeye", 
    description: "Clint Barton trains Kate Bishop as his successor", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "6 episodes",
    director: "Rhys Thomas"
  },
  { 
    year: "2021", 
    title: "Spider-Man: No Way Home", 
    description: "Peter Parker's identity is revealed, opening the multiverse", 
    phase: 4, 
    type: "movie", 
    major: true,
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$1.921B",
    director: "Jon Watts"
  },
  { 
    year: "2022", 
    title: "Moon Knight", 
    description: "Marc Spector struggles with dissociative identity disorder", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "6 episodes",
    director: "Mohamed Diab"
  },
  { 
    year: "2022", 
    title: "Doctor Strange in the Multiverse of Madness", 
    description: "Strange explores the multiverse and faces the Scarlet Witch", 
    phase: 4, 
    type: "movie", 
    major: true,
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$956.0M",
    director: "Sam Raimi"
  },
  { 
    year: "2022", 
    title: "Ms. Marvel", 
    description: "Kamala Khan discovers her powers and heritage", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "6 episodes",
    director: "Adil El Arbi & Bilall Fallah"
  },
  { 
    year: "2022", 
    title: "Thor: Love and Thunder", 
    description: "Thor reunites with Jane Foster, now the Mighty Thor", 
    phase: 4, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$760.9M",
    director: "Taika Waititi"
  },
  { 
    year: "2022", 
    title: "She-Hulk: Attorney at Law", 
    description: "Jennifer Walters balances law and being a Hulk", 
    phase: 4, 
    type: "series",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    episodes: "9 episodes",
    director: "Kat Coiro"
  },
  { 
    year: "2022", 
    title: "Werewolf by Night", 
    description: "A monster hunter special in black and white", 
    phase: 4, 
    type: "special",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    runtime: "53 minutes",
    director: "Michael Giacchino"
  },
  { 
    year: "2022", 
    title: "Black Panther: Wakanda Forever", 
    description: "Wakanda mourns T'Challa and faces new threats", 
    phase: 4, 
    type: "movie",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
    boxOffice: "$859.2M",
    director: "Ryan Coogler"
  }
];

const phaseColors = {
  1: "from-red-500 to-orange-500",
  2: "from-blue-500 to-cyan-500",
  3: "from-purple-500 to-pink-500",
  4: "from-green-500 to-teal-500"
};

const Timeline: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            MCU TIMELINE
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow the complete chronological journey through the Marvel Cinematic Universe
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 via-purple-500 to-green-500 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedEvent(event)}
                  className={`cursor-pointer bg-gradient-to-br ${phaseColors[event.phase]} p-1 rounded-2xl group`}
                >
                  <div className="bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    {/* Image */}
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        {event.type === 'movie' ? <Film className="w-4 h-4 text-white" /> : 
                         event.type === 'series' ? <Star className="w-4 h-4 text-white" /> :
                         <Play className="w-4 h-4 text-white" />}
                        <span className="text-sm font-semibold text-white bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                          Phase {event.phase}
                        </span>
                      </div>
                      {event.major && (
                        <div className="absolute top-3 right-3">
                          <Award className="w-6 h-6 text-yellow-400" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${event.major ? 'text-yellow-400' : 'text-white'}`}>
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-500" />
                          <span className="text-gray-500">{event.year}</span>
                        </div>
                        {event.director && (
                          <span className="text-gray-500">Dir: {event.director}</span>
                        )}
                      </div>
                      
                      {event.boxOffice && (
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">{event.boxOffice}</span>
                        </div>
                      )}
                      
                      {event.episodes && (
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-blue-400" />
                          <span className="text-blue-400">{event.episodes}</span>
                        </div>
                      )}
                      
                      {event.runtime && (
                        <div className="flex items-center gap-1">
                          <Play className="w-3 h-3 text-purple-400" />
                          <span className="text-purple-400">{event.runtime}</span>
                        </div>
                      )}
                    </div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className={`h-1 bg-gradient-to-r ${phaseColors[event.phase]} mt-4 rounded-full origin-left`}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${phaseColors[event.phase]} border-4 border-black shadow-lg ${event.major ? 'w-8 h-8' : ''}`}
                />
                {event.major && (
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-6 h-6 rounded-full bg-yellow-400 opacity-30"
                  />
                )}
              </div>

              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Timeline Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {[1, 2, 3, 4].map((phase) => (
                <div key={phase} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${phaseColors[phase]} shadow-lg`}></div>
                  <span className="text-gray-300 font-medium">Phase {phase}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 shadow-lg"></div>
                <span className="text-gray-300">Major Event</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">Movie</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Series</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">Special</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Movies", value: "30+", icon: Film },
            { label: "Disney+ Series", value: "15+", icon: Star },
            { label: "Total Revenue", value: "$28B+", icon: Award },
            { label: "Years Active", value: "15+", icon: Calendar }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center"
              >
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;