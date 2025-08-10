import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    id: 1,
    title: "Phase One",
    subtitle: "The Infinity Saga Begins",
    period: "2008-2012",
    color: "from-red-600 to-orange-500",
    movies: ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America", "The Avengers"],
    description: "The foundation of the MCU, introducing our core heroes and culminating in the first Avengers assembly."
  },
  {
    id: 2,
    title: "Phase Two",
    subtitle: "Expanding the Universe",
    period: "2013-2015",
    color: "from-blue-600 to-cyan-500",
    movies: ["Iron Man 3", "Thor: The Dark World", "Captain America: The Winter Soldier", "Guardians of the Galaxy", "Avengers: Age of Ultron", "Ant-Man"],
    description: "Heroes face personal challenges while cosmic threats emerge and the universe expands."
  },
  {
    id: 3,
    title: "Phase Three",
    subtitle: "The Infinity Saga Culminates",
    period: "2016-2019",
    color: "from-purple-600 to-pink-500",
    movies: ["Captain America: Civil War", "Doctor Strange", "Guardians Vol. 2", "Spider-Man: Homecoming", "Thor: Ragnarok", "Black Panther", "Avengers: Infinity War", "Ant-Man and the Wasp", "Captain Marvel", "Avengers: Endgame", "Spider-Man: Far From Home"],
    description: "The epic conclusion of the Infinity Saga, featuring the ultimate battle against Thanos."
  },
  {
    id: 4,
    title: "Phase Four",
    subtitle: "The Multiverse Saga",
    period: "2021-Present",
    color: "from-green-600 to-teal-500",
    movies: ["WandaVision", "The Falcon and the Winter Soldier", "Loki", "Black Widow", "What If...?", "Shang-Chi", "Eternals", "Hawkeye", "Spider-Man: No Way Home", "Moon Knight", "Doctor Strange in the Multiverse of Madness", "Ms. Marvel", "Thor: Love and Thunder", "She-Hulk", "Werewolf by Night", "Black Panther: Wakanda Forever"],
    description: "New heroes emerge and the multiverse opens, setting the stage for unprecedented adventures."
  }
];

const Phases: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-4">
            MCU PHASES
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Journey through the interconnected saga that redefined superhero cinema
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${phase.color} p-1 rounded-2xl shadow-2xl`}>
                <div className="bg-black/90 backdrop-blur-md p-8 rounded-2xl h-full border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-3xl font-bold text-white">{phase.title}</h3>
                    <span className="text-sm bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">{phase.period}</span>
                  </div>
                  
                  <h4 className="text-xl text-gray-300 mb-4">{phase.subtitle}</h4>
                  <p className="text-gray-400 mb-6">{phase.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-gray-300 mb-3">Key Releases:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.movies.slice(0, 6).map((movie, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs bg-gray-800/50 backdrop-blur-sm px-2 py-1 rounded text-gray-300 border border-gray-700/50"
                        >
                          {movie}
                        </motion.div>
                      ))}
                    </div>
                    {phase.movies.length > 6 && (
                      <p className="text-xs text-gray-500 mt-2">
                        +{phase.movies.length - 6} more...
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;