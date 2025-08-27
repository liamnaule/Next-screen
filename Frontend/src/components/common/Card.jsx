import { motion } from "framer-motion";

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <motion.div 
      className={`bg-card text-card-foreground rounded-lg border shadow-sm ${hoverEffect ? 'hover-lift' : ''} ${className}`}
      whileHover={hoverEffect ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card