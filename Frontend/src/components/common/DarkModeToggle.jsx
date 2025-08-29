import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-yellow-400 flex items-center justify-center"
        initial={false}
        animate={{ x: isDarkMode ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDarkMode ? (
          <Moon className="w-3 h-3 text-gray-800" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
      
      {/* Background stars for dark mode */}
      {isDarkMode && (
        <>
          <motion.div
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: '25%', left: '35%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{ top: '60%', left: '50%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute w-0.75 h-0.75 bg-white rounded-full"
            style={{ top: '40%', left: '70%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />
        </>
      )}
    </motion.button>
  );
};

export default DarkModeToggle;