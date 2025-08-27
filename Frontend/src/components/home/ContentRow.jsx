import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Button from '../common/Button';
import FilmCard from '../ui/FilmCard.jsx';

export default function ContentRow({ title, films, showViewAll = true }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container px-4">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h2>
          {showViewAll && (
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.div>
              </Button>
            </motion.div>
          )}
        </motion.div>
        
        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {films.map((film, index) => (
            <motion.div
              key={film.id}
              variants={itemVariants}
              custom={index}
              whileHover={{ scale: 1.02 }}
            >
              <FilmCard film={film} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}