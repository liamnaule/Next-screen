import React, { useRef } from "react";
import Card from '../common/card.jsx';
import SectionTitle from '../common/Sectiontitle.jsx';
import useAnimation, { fadeInUp } from '../hooks/UseAnimation.jsx';

// Import images
import tenet from '../../assets/image/2fast.webp';
import workingMan from '../../assets/image/sky fall.webp';
import evilDead from '../../assets/image/superman.webp';

// Sample movie data
const featuredMovies = [
  {
    id: 1,
    title: "The Last Sunset",
    creator: "Emma Richardson",
    category: "Drama",
    duration: "1h 28m",
    image: tenet,
    rating: 4.8
  },
  {
    id: 2,
    title: "Urban Echoes",
    creator: "Marcus Chen",
    category: "Documentary",
    duration: "45m",
    image: workingMan,
    rating: 4.5
  },
  {
    id: 3,
    title: "Silent Whispers",
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Featured Films" 
          subtitle="Handpicked selections from our curators" 
        />
        <div 
          ref={scope}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredMovies.map((movie, index) => (
            <Card 
              key={movie.id}
              className="relative overflow-hidden group h-96"
              {...fadeInUp()}
            >
              <img 
                src={movie.image} 
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{movie.title}</h3>
                <p className="text-muted-300">{movie.category} • {movie.duration}</p>
                <p className="text-muted-400 text-sm">By {movie.creator}</p>
                <div className="mt-2 flex items-center">
                  <span className="text-yellow-400 mr-2">★</span>
                  <span className="text-white font-medium">{movie.rating}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured