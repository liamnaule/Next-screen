import { motion } from 'framer-motion';

const Logo = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  return (
    <motion.div
      className={`flex items-center font-bold ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* NEXT - Light Stencil Style */}
      <span className="font-stencil font-light text-gray-800 dark:text-white tracking-wider bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 bg-clip-text text-transparent px-1 py-0.5 rounded-l">
        NEXT
      </span>
      
      {/* SCREEN - Dark/White Style */}
      <span className="font-sans font-black text-black dark:text-white bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text text-transparent px-1 py-0.5 rounded-r border-l-2 border-gray-400 dark:border-gray-600">
        SCREEN
      </span>
    </motion.div>
  );
};

export default Logo;