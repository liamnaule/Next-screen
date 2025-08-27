import { motion } from "framer-motion";
import { Star, Play, Plus, Clock } from "lucide-react";
import Card from '../common/Card';

export default function FilmCard({ film, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden hover-lift">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={film.thumbnail}
            alt={film.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
            initial={false}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
              <Play className="w-7 h-7 text-black ml-1" />
            </div>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-lg font-medium">
              {film.duration}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3">
            <div className="flex items-center space-x-1 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-lg">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="font-medium">{film.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-card">
          {/* Title and Creator */}
          <div className="mb-3">
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
              {film.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              by {film.creator}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{film.year}</span>
            <span>{film.genre}</span>
            <span>{film.views.toLocaleString()} views</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              className="flex-1 bg-primary text-primary-foreground py-2 px-3 rounded-lg font-medium transition-colors hover:bg-primary/90 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4 mr-1 inline" />
              Watch
            </motion.button>
            
            <motion.button
              className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clock className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}