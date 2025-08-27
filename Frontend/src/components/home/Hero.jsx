import { motion } from "framer-motion";
import Button from '../common/Button';
import { Play, Plus, Info, Star } from "lucide-react";

export default function Hero() {
  return (
    <motion.section 
      className="relative h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599735816-c5c4082b4c64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Featured Film"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 cinematic-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Featured Film
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              The Midnight
              <span className="block gradient-text">Chronicles</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg"
            >
              A groundbreaking indie film that explores the depths of human consciousness through stunning visuals and compelling storytelling.
            </motion.p>

            {/* Film Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center space-x-6 mb-8 text-sm text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">8.7/10</span>
              </div>
              <div>2024</div>
              <div>2h 18m</div>
              <div>Drama • Sci-Fi</div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Plus className="w-5 h-5 mr-2" />
                My List
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:bg-white/10"
              >
                <Info className="w-5 h-5 mr-2" />
                More Info
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </motion.section>
  );
}