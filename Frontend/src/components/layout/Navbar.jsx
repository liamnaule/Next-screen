import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Film, 
  User, 
  Search, 
  Upload, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Star,
  TrendingUp,
  Calendar,
  Users,
  Award,
  Clock,
  Heart
} from 'lucide-react';
import Button from '../common/Button';
import DarkModeToggle from '../common/DarkModeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Home',
      href: '#',
      icon: Home
    },
    {
      label: 'Discover',
      href: '#discover',
      icon: Search,
      dropdown: [
        { label: 'Trending', icon: TrendingUp, href: '#trending' },
        { label: 'Top Rated', icon: Star, href: '#top-rated' },
        { label: 'New Releases', icon: Calendar, href: '#new-releases' }
      ]
    },
    {
      label: 'Categories',
      href: '#categories',
      icon: Film,
      dropdown: [
        { label: 'Drama', href: '#drama' },
        { label: 'Documentary', href: '#documentary' },
        { label: 'Animation', href: '#animation' },
        { label: 'Thriller', href: '#thriller' },
        { label: 'Sci-Fi', href: '#sci-fi' },
        { label: 'Romance', href: '#romance' }
      ]
    },
    {
      label: 'Creators',
      href: '#creators',
      icon: Users,
      dropdown: [
        { label: 'Featured', icon: Award, href: '#featured-creators' },
        { label: 'Rising Stars', icon: TrendingUp, href: '#rising-stars' },
        { label: 'Community', icon: Users, href: '#community' }
      ]
    }
  ];

  const userItems = [
    { label: 'Watch Later', icon: Clock, href: '#watch-later' },
    { label: 'Favorites', icon: Heart, href: '#favorites' },
    { label: 'My Profile', icon: User, href: '#profile' }
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/10 shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Film className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-bold text-xl gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                NextScreen
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:text-primary group"
                    whileHover={{ y: -2 }}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/20 overflow-hidden"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <motion.a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="flex items-center px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
                              whileHover={{ x: 4 }}
                            >
                              {dropdownItem.icon && (
                                <dropdownItem.icon className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                              )}
                              {dropdownItem.label}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <motion.div
                className="hidden md:block"
                whileHover={{ scale: 1.05 }}
              >
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>
              </motion.div>

              {/* Dark Mode Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <DarkModeToggle />
              </motion.div>

              {/* Upload Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="hidden md:flex bg-gradient-to-r from-primary to-purple-600">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </motion.div>

              {/* User Menu */}
              <motion.div
                className="relative"
                onMouseEnter={() => setActiveDropdown('user')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <User className="w-5 h-5" />
                </motion.button>

                {/* User Dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 w-48 bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/20 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div className="py-2">
                        {userItems.map((item) => (
                          <motion.a
                            key={item.label}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
                            whileHover={{ x: 4 }}
                          >
                            <item.icon className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                            {item.label}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <motion.a
                      href={item.href}
                      className="flex items-center px-3 py-3 text-base font-medium rounded-lg hover:bg-secondary transition-colors duration-200"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-4 h-4 ml-auto transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </motion.a>

                    {/* Mobile Dropdown */}
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        className="ml-8 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Mobile User Menu */}
                <div className="pt-4 border-t border-border/20">
                  <div className="space-y-2">
                    {userItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-border/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Dark Mode</span>
                    <DarkModeToggle />
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Film
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;