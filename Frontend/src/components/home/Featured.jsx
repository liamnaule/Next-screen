import React, { useRef, useState } from "react";
import Card from '../common/card';
import SectionTitle from '../common/Sectiontitle';
import { useAnimation } from '../hooks/UseAnimation';
import { gsap } from 'gsap';

// Import images
import tenet from '../../assets/image/2fast.webp';
import workingMan from '../../assets/image/sky fall.webp';
import evilDead from '../../assets/image/superman.webp';

// Sample movie data
const featuredMovies = [
  {
    id: 1,
    title: "THE LAST SUNSET",
    creator: "Emma Richardson",
    category: "Drama",
    duration: "1h 28m",
    image: tenet,
    rating: 4.8
  },
  {
    id: 2,
    title: "URBAN ECHOES",
    creator: "Marcus Chen",
    category: "Documentary",
    duration: "45m",
    image: workingMan,
    rating: 4.5
  },
  {
    id: 3,
    title: "SILENT WHISPERS",
    creator: "Sophia Martinez",
    category: "Thriller",
    duration: "1h 15m",
    image: evilDead,
    rating: 4.7
  }
]

const Featured = () => {
  const [scope] = useAnimation()
  const sectionRef = useRef(null)
  const [activeMovie, setActiveMovie] = useState(null)

  const handleMouseEnter = (index) => {
    setActiveMovie(index)
    gsap.to(`.movie-${index}`, {
      scale: 1.05,
      zIndex: 10,
      duration: 0.3,
      ease: "power2.out"
    })
    
    gsap.to(`.movie-content-${index}`, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = (index) => {
    setActiveMovie(null)
    gsap.to(`.movie-${index}`, {
      scale: 1,
      zIndex: 1,
      duration: 0.3,
      ease: "power2.out"
    })
    
    gsap.to(`.movie-content-${index}`, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <section ref={sectionRef} className="py-20 bg-dark-200 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title="FEATURED FILMS" 
          subtitle="Handpicked selections from our curators" 
        />
        
        <div 
          ref={scope}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
        >
          {featuredMovies.map((movie, index) => (
            <div 
              key={movie.id}
              className={`movie-${index} relative h-96 transform transition-all duration-500 ${activeMovie !== null && activeMovie !== index ? 'opacity-70' : 'opacity-100'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Card glow={true} className="h-full">
                <div className="relative h-full overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  
                  <div className={`movie-content-${index} absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 transform translate-y-5 flex flex-col justify-end p-6`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{movie.title}</h3>
                    <p className="text-electric-300 mb-2">{movie.category} • {movie.duration}</p>
                    <p className="text-electric-200 text-sm mb-3">By {movie.creator}</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <div className="w-full h-2 bg-electric-800 rounded-full"></div>
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-electric-500 to-electric-700 rounded-full" 
                          style={{ width: `${(movie.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-electric-400 font-bold">{movie.rating}</span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-electric-600 hover:bg-electric-500 text-white py-2 rounded-lg transition-colors">
                        Watch
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-dark-300 hover:bg-dark-400 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured