import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Music, Shuffle, Repeat } from 'lucide-react';

const playlist = [
  { title: "Avengers Theme", artist: "Alan Silvestri", duration: "2:00", url: "/music/avengers.mp3" },
  { title: "Immigrant Song", artist: "Led Zeppelin", duration: "2:38", url: "/music/thor.mp3" },
  { title: "Bye Bye Bye", artist: "NSYNC", duration: "3:59", url: "/music/byebye.mp3" }, // fixed typo
  { title: "All the Stars", artist: "Kendrick Lamar", duration: "3:55", url: "/music/allthestars.mp3" },
  { title: "Pray For Me", artist: "Weekend, Kendrick Lamar", duration: "3:29", url: "/music/prayforme.mp3" },
  { title: "Sunflower", artist: "Swae Lee, post malone", duration: "2:42", url: "/music/sunflower.mp3" },
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(30);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Animate on scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Load the current track whenever it changes
  useEffect(() => {
    
    const audio = new Audio(playlist[currentTrack].url);
    audio.loop = isRepeating;
    audio.volume = volume / 100;
    audioRef.current = audio;

    if (isPlaying) {
      audio.play().catch((err) => console.error("Audio play error:", err));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack, isRepeating]);

  // Update volume instantly
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error("Play failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const nextTrack = () => {
    if (isShuffled) {
      setCurrentTrack(Math.floor(Math.random() * playlist.length));
    } else {
      setCurrentTrack((prev) => (prev + 1) % playlist.length);
    }
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  return (
    <div ref={ref}>
      <AnimatePresence>
        {isVisible && isInView && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 left-6 z-50"
          >
            <motion.div
              layout
              className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.9) 100%)',
              }}
            >
              {/* Compact Player */}
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </motion.button>

                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm truncate">
                      {playlist[currentTrack].title}
                    </div>
                    <div className="text-gray-400 text-xs truncate">
                      {playlist[currentTrack].artist}
                    </div>
                  </div>

                  <motion.button onClick={() => setIsExpanded(!isExpanded)} className="text-white/70 hover:text-white transition-colors">
                    <Music className="w-5 h-5" />
                  </motion.button>

                  <motion.button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-white transition-colors text-xs ml-2">
                    ✕
                  </motion.button>
                </div>

                {/* Progress Bar */}
                {/* <div className="mt-3">
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <motion.div
                      className="bg-gradient-to-r from-red-500 to-red-600 h-1 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: isPlaying ? "100%" : "0%" }}
                      transition={{ duration: 180, ease: "linear" }}
                    />
                  </div>
                </div> */}

                {/* Visualizer */}
                {isPlaying && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center gap-1 mt-3">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scaleY: [0.3, 1.5, 0.3], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                        className="w-1 h-4 bg-gradient-to-t from-red-500 to-red-300 rounded-full"
                      />
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Expanded Player */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="border-t border-white/10">
                    <div className="p-4 space-y-4">
                      {/* Controls */}
                      <div className="flex items-center justify-center gap-4">
                        <motion.button onClick={() => setIsShuffled(!isShuffled)} className={isShuffled ? 'text-red-400 bg-red-400/20 p-2 rounded-full' : 'text-white/70 hover:text-white p-2 rounded-full'}>
                          <Shuffle className="w-4 h-4" />
                        </motion.button>
                        <motion.button onClick={prevTrack} className="text-white/70 hover:text-white"><SkipBack className="w-5 h-5" /></motion.button>
                        <motion.button onClick={nextTrack} className="text-white/70 hover:text-white"><SkipForward className="w-5 h-5" /></motion.button>
                        <motion.button onClick={() => setIsRepeating(!isRepeating)} className={isRepeating ? 'text-red-400 bg-red-400/20 p-2 rounded-full' : 'text-white/70 hover:text-white p-2 rounded-full'}>
                          <Repeat className="w-4 h-4" />
                        </motion.button>
                      </div>

                      {/* Volume */}
                      <div className="flex items-center gap-3">
                        <motion.button onClick={toggleMute} className="text-white/70 hover:text-white">
                          {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </motion.button>
                        <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} className="w-full h-1 rounded-full cursor-pointer" style={{ background: `linear-gradient(to right, #ef4444 ${volume}%, #374151 ${volume}%)` }} />
                        <span className="text-xs text-gray-400 w-8 text-right">{volume}</span>
                      </div>

                      {/* Playlist */}
                      <div className="max-h-40 overflow-y-auto space-y-1">
                        {playlist.map((track, index) => (
                          <motion.div key={index} whileHover={{ scale: 1.02, x: 5 }} onClick={() => setCurrentTrack(index)} className={`p-2 rounded-lg cursor-pointer ${currentTrack === index ? 'bg-red-500/20 border border-red-500/30' : 'hover:bg-white/5'}`}>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className={currentTrack === index ? 'text-red-400 font-medium text-sm' : 'text-white text-sm'}>
                                  {track.title}
                                </div>
                                <div className="text-xs text-gray-400">{track.artist}</div>
                              </div>
                              <div className="text-xs text-gray-500">{track.duration}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
