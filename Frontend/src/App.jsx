import { motion } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      
      <motion.div 
        className="ml-0 lg:ml-80 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Home />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App;
