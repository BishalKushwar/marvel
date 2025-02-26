import React from 'react';
import { Film } from 'lucide-react';
import { motion } from 'framer-motion';
import movies from '../data/movies';

function MoviesSection() {
  return (
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
  );
}

export default MoviesSection;