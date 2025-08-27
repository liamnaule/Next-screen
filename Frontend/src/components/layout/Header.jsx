import { useState } from 'react'
import { Search, Menu, User, Upload, Film } from "lucide-react";
import { motion } from "framer-motion";
import Button from '../common/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Film className="w-5 h-5 text-white" />
          </motion.div>
          <span className="font-bold text-xl gradient-text">
            NextScreen
          </span>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="flex-1 max-w-md mx-6 hidden md:block"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              placeholder="Search films, creators..."
              className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Discover", "Categories", "Creators"].map((item, index) => (
            <motion.a 
              key={item}
              href="#" 
              className="hover:text-primary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Film className="w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="hidden sm:flex bg-gradient-to-r from-primary to-purple-600">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container px-4 py-4 space-y-3">
            {["Discover", "Categories", "Creators", "Upload"].map((item) => (
              <a key={item} href="#" className="block hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}