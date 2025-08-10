import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, Heart, Brain, Flame, Star } from 'lucide-react';

const characters = [
  {
    name: "Iron Man",
    realName: "Tony Stark",
    power: "Technology Genius",
    icon: Zap,
    color: "from-red-500 to-yellow-500",
    description: "Billionaire genius who created the Iron Man suit"
  },
  {
    name: "Captain America",
    realName: "Steve Rogers",
    power: "Super Soldier",
    icon: Shield,
    color: "from-blue-500 to-red-500",
    description: "The First Avenger with unwavering moral compass"
  },
  {
    name: "Thor",
    realName: "Thor Odinson",
    power: "God of Thunder",
    icon: Zap,
    color: "from-blue-400 to-yellow-400",
    description: "Asgardian prince wielding the mighty Mjolnir"
  },
  {
    name: "Black Widow",
    realName: "Natasha Romanoff",
    power: "Master Spy",
    icon: Heart,
    color: "from-red-600 to-black",
    description: "Elite assassin with a heart of gold"
  },
  {
    name: "Hulk",
    realName: "Bruce Banner",
    power: "Gamma Radiation",
    icon: Brain,
    color: "from-green-500 to-green-700",
    description: "Brilliant scientist with incredible strength"
  },
  {
    name: "Hawkeye",
    realName: "Clint Barton",
    power: "Master Marksman",
    icon: Star,
    color: "from-purple-500 to-blue-500",
    description: "World's greatest archer and family man"
  },
  {
    name: "Doctor Strange",
    realName: "Stephen Strange",
    power: "Mystic Arts",
    icon: Star,
    color: "from-orange-500 to-red-500",
    description: "Master of the mystical arts and time"
  },
  {
    name: "Spider-Man",
    realName: "Peter Parker",
    power: "Spider Powers",
    icon: Zap,
    color: "from-red-500 to-blue-600",
    description: "Friendly neighborhood web-slinger"
  },
  {
    name: "Black Panther",
    realName: "T'Challa",
    power: "Vibranium Enhancement",
    icon: Shield,
    color: "from-purple-700 to-gray-800",
    description: "King of Wakanda and protector of his people"
  }
];

const Characters: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent mb-4">
            HEROES
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the legendary heroes who protect our universe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => {
            const IconComponent = character.icon;
            
            return (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${character.color} p-1 rounded-2xl shadow-2xl`}>
                  <div className="bg-black/90 backdrop-blur-md p-6 rounded-2xl h-full border border-white/10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="mb-4 relative"
                    >
                      <IconComponent className="w-12 h-12 mx-auto text-white drop-shadow-lg" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0"
                      >
                        <IconComponent className="w-12 h-12 mx-auto text-white/20" />
                      </motion.div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-center mb-2">{character.name}</h3>
                    <p className="text-gray-400 text-center mb-2">{character.realName}</p>
                    
                    <div className={`bg-gradient-to-r ${character.color} text-transparent bg-clip-text text-center font-semibold mb-4`}>
                      {character.power}
                    </div>
                    
                    <p className="text-gray-300 text-center text-sm leading-relaxed">
                      {character.description}
                    </p>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className={`h-1 bg-gradient-to-r ${character.color} mt-4 rounded-full origin-left`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            And many more heroes join the fight...
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="w-3 h-3 bg-yellow-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Characters;