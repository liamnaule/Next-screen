import { useRef, useState } from 'react'
import Card from '../common/Card'
import SectionTitle from '../common/SectionTitle'
import { useAnimation } from '../../hooks/useAnimation'
import { fadeInUp } from '../../utils/animations'

// Sample gallery data
const galleryItems = [
  { id: 1, title: "Student Films", image: "/sample-movie-1.jpg", count: "124" },
  { id: 2, title: "Documentaries", image: "/sample-movie-2.jpg", count: "87" },
  { id: 3, title: "Short Films", image: "/sample-movie-3.jpg", count: "156" },
  { id: 4, title: "Experimental", image: "/sample-movie-1.jpg", count: "64" },
  { id: 5, title: "Animation", image: "/sample-movie-2.jpg", count: "92" },
  { id: 6, title: "Horror", image: "/sample-movie-3.jpg", count: "78" },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [scope] = useAnimation()
  const sectionRef = useRef(null)

  const categories = ['All', 'Student Films', 'Documentaries', 'Short Films', 'Experimental', 'Animation', 'Horror']

  return (
    <section ref={sectionRef} className="py-20 bg-muted-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Browse Categories" 
          subtitle="Explore films by category and discover new perspectives" 
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-muted-700 hover:bg-muted-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div 
          ref={scope}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id}
              className="relative overflow-hidden group h-80"
              {...fadeInUp()}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-muted-300">{item.count} films</p>
                
                <button className="mt-4 inline-flex items-center text-white font-medium group-hover:underline">
                  Explore category
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery