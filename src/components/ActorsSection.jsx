import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import actors from '../data/actors';

function ActorsSection() {
  return (
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
  );
}

export default ActorsSection;