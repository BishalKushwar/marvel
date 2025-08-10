import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Clock, Zap } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, setCurrentSection }) => {
  const navItems = [
    { id: 0, label: 'Home', icon: Home, href: 'hero' },
    { id: 1, label: 'Phases', icon: Zap, href: 'phases' },
    { id: 2, label: 'Heroes', icon: Users, href: 'characters' },
    { id: 3, label: 'Timeline', icon: Clock, href: 'timeline' }
  ];

  const scrollToSection = (href: string, id: number) => {
    setCurrentSection(id);
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href, item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    currentSection === item.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium hidden md:block">{item.label}</span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;