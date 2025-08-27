import { motion } from "framer-motion";
import { 
  Home, 
  Search, 
  Film, 
  User, 
  TrendingUp, 
  Star, 
  Clock, 
  Heart,
  Settings,
  PlayCircle,
  Users,
  Award
} from "lucide-react";

const SidebarItem = ({ icon, label, isActive = false, onClick }) => (
  <motion.button
    className={`
      w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300
      ${isActive 
        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
      }
    `}
    onClick={onClick}
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="w-5 h-5">{icon}</span>
    <span className="font-medium">{label}</span>
  </motion.button>
);

const SidebarSection = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-xs uppercase tracking-wider text-muted-foreground px-4 font-semibold">
      {title}
    </h3>
    <div className="space-y-1">{children}</div>
  </div>
);

export default function Sidebar() {
  return (
    <motion.aside 
      className="fixed left-0 top-0 h-screen w-80 glass-nav z-50 hidden lg:flex lg:flex-col"
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {/* Logo Section */}
      <motion.div 
        className="p-6 border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <PlayCircle className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold gradient-text">NextScreen</h1>
            <p className="text-xs text-muted-foreground">Premium Streaming</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SidebarSection title="Main">
            <SidebarItem icon={<Home />} label="Home" isActive={true} />
            <SidebarItem icon={<Search />} label="Discover" />
            <SidebarItem icon={<TrendingUp />} label="Trending" />
            <SidebarItem icon={<Star />} label="Top Rated" />
          </SidebarSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <SidebarSection title="Content">
            <SidebarItem icon={<Film />} label="Films" />
            <SidebarItem icon={<Users />} label="Creators" />
            <SidebarItem icon={<Award />} label="Awards" />
          </SidebarSection>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <SidebarSection title="Personal">
            <SidebarItem icon={<Clock />} label="Watch Later" />
            <SidebarItem icon={<Heart />} label="Favorites" />
            <SidebarItem icon={<User />} label="Profile" />
          </SidebarSection>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div 
        className="p-6 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <SidebarItem icon={<Settings />} label="Settings" />
        
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-purple-600/10 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Creator Account</p>
              <p className="text-xs text-muted-foreground">Upload & Share</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
}