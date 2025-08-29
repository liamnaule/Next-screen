import { motion } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
