import { useRef } from 'react'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import { useAnimation } from '../../hooks/useAnimation'
import { fadeInUp, stagger } from '../../utils/animations'

// Sample movie data - replace with actual data later
const featuredMovies = [
  {
    id: 1,
    title: "The Last Sunset",
    creator: "Emma Richardson",
    category: "Drama",
    duration: "1h 28m",
    image: "/sample-movie-1.jpg",
    rating: 4.8
  },
  {
    id: 2,
    title: "Urban Echoes",
    creator: "Marcus Chen",
    category: "Documentary",
    duration: "45m",
    image: "/sample-movie-2.jpg",
    rating: 4.5
  },
  {
    id: 3,
    title: "Silent Whispers",
    creator: "Sophia Martinez",
    category: "Thriller",
    duration: "1h 15m",
    image: "/sample-movie-3.jpg",
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
          subtitle="Discover exceptional work from emerging filmmakers around the world" 
        />
        
        <div 
          ref={scope}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredMovies.map((movie, index) => (
            <Card 
              key={movie.id}
              className="overflow-hidden group"
              {...stagger(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-primary rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-muted-900">{movie.title}</h3>
                  <span className="flex items-center bg-primary/10 text-primary text-sm px-2 py-1 rounded">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {movie.rating}
                  </span>
                </div>
                
                <p className="text-muted-600 mb-3">by {movie.creator}</p>
                
                <div className="flex justify-between items-center text-sm text-muted-500">
                  <span>{movie.category}</span>
                  <span>{movie.duration}</span>
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