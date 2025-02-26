import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
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
  );
}

export default HeroSection;