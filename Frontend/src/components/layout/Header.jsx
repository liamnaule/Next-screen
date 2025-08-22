import { useState } from 'react'
import Button from '../common/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-muted-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Next Screen</div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-muted-700 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-muted-700 hover:text-primary transition-colors">Discover</a>
            <a href="#" className="text-muted-700 hover:text-primary transition-colors">Creators</a>
            <a href="#" className="text-muted-700 hover:text-primary transition-colors">About</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-muted-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-muted-700 hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-muted-700 hover:text-primary transition-colors">Discover</a>
              <a href="#" className="text-muted-700 hover:text-primary transition-colors">Creators</a>
              <a href="#" className="text-muted-700 hover:text-primary transition-colors">About</a>
            </nav>
            
            <div className="flex flex-col space-y-2 mt-4">
              <Button variant="outline" className="w-full">Login</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header