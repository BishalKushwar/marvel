import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-blue-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30 shadow-lg"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Additional Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-red-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-blue-500/10 rounded-full"
        />
      </div>

      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <Shield className="w-24 h-24 mx-auto text-red-500 mb-6 drop-shadow-2xl" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-24 h-24 mx-auto"
            >
              <Shield className="w-24 h-24 mx-auto text-red-500/30" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent mb-6 drop-shadow-2xl"
        >
          MARVEL
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8"
        >
          CINEMATIC UNIVERSE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Experience the epic journey of heroes, villains, and the infinite saga that changed cinema forever
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-yellow-400">
            <Star className="w-6 h-6" />
            <span className="text-lg">30+ Movies</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <Zap className="w-6 h-6" />
            <span className="text-lg">4 Phases</span>
          </div>
          <div className="flex items-center gap-2 text-red-400">
            <Shield className="w-6 h-6" />
            <span className="text-lg">Infinite Heroes</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-xl font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300"
            onClick={() => document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Universe
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;