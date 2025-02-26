import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

function SoundButton({ isMuted, toggleMute }) {
  return (
    <motion.button
      className="fixed top-4 right-4 z-50 bg-red-600 p-3 rounded-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMute}
    >
      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
    </motion.button>
  );
}

export default SoundButton;