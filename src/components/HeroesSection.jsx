import React from 'react';
import { motion } from 'framer-motion';
import heroes from '../data/heroes';

function HeroesSection() {
  return (
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
  );
}

export default HeroesSection;