import { Zap, Shield, Cloud, Target, Flame, Crown, Compass } from 'lucide-react';

const heroes = [
  {
    name: "Iron Man",
    image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800",
    description: "Genius. Billionaire. Philanthropist.",
    color: "from-red-600 to-yellow-500",
    icon: <Zap className="w-6 h-6" />,
    year: "2008"
  },
  {
    name: "Captain America",
    image: "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?auto=format&fit=crop&q=80&w=800",
    description: "The First Avenger",
    color: "from-blue-600 to-red-500",
    icon: <Shield className="w-6 h-6" />,
    year: "2011"
  },
  {
    name: "Thor",
    image: "https://images.unsplash.com/photo-1556611832-c5f358b0057e?auto=format&fit=crop&q=80&w=800",
    description: "God of Thunder",
    color: "from-blue-400 to-purple-500",
    icon: <Cloud className="w-6 h-6" />,
    year: "2011"
  },
  {
    name: "Black Widow",
    image: "https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?auto=format&fit=crop&q=80&w=800",
    description: "Master Spy",
    color: "from-red-500 to-gray-900",
    icon: <Target className="w-6 h-6" />,
    year: "2010"
  },
  {
    name: "Hawkeye",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    description: "Master Marksman",
    color: "from-purple-600 to-violet-900",
    icon: <Target className="w-6 h-6" />,
    year: "2011"
  },
  {
    name: "Hulk",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    description: "Strongest There Is",
    color: "from-green-500 to-green-800",
    icon: <Flame className="w-6 h-6" />,
    year: "2008"
  },
  {
    name: "Doctor Strange",
    image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=800",
    description: "Master of the Mystic Arts",
    color: "from-orange-500 to-red-700",
    icon: <Crown className="w-6 h-6" />,
    year: "2016"
  },
  {
    name: "Black Panther",
    image: "https://images.unsplash.com/photo-1599033580159-6d6800f20857?auto=format&fit=crop&q=80&w=800",
    description: "King of Wakanda",
    color: "from-purple-900 to-gray-900",
    icon: <Crown className="w-6 h-6" />,
    year: "2016"
  },
  {
    name: "Spider-Man",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800",
    description: "Friendly Neighborhood Hero",
    color: "from-red-600 to-blue-700",
    icon: <Compass className="w-6 h-6" />,
    year: "2016"
  }
];

export default heroes;