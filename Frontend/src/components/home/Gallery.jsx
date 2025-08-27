import React, { useRef, useState } from "react";
import Card from '../common/Card';
import SectionTitle from '../common/Sectiontitle';
import { useAnimation } from '../hooks/UseAnimation';

// Import images
import superman from '../../assets/image/superman.webp';
import skyfall from '../../assets/image/sky fall.webp';
import twofast from '../../assets/image/2fast.webp';

// Sample gallery data
const galleryItems = [
  { id: 1, title: "STUDENT FILMS", image: superman, count: "124" },
  { id: 2, title: "DOCUMENTARIES", image: skyfall, count: "87" },
  { id: 3, title: "SHORT FILMS", image: twofast, count: "156" },
  { id: 4, title: "EXPERIMENTAL", image: skyfall, count: "64" }, 
  { id: 5, title: "ANIMATION", image: twofast, count: "92" },
  { id: 6, title: "HORROR", image: superman, count: "78" },        
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [scope] = useAnimation()
  const sectionRef = useRef(null)

  const categories = ['All', 'Student Films', 'Documentaries', 'Short Films', 'Experimental', 'Animation', 'Horror']

  return (
    <section ref={sectionRef} className="py-20 bg-dark-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-electric-500/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title="BROWSE CATEGORIES" 
          subtitle="Explore films by category and discover new perspectives" 
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-electric-500 to-electric-700 text-white shadow-lg shadow-electric-500/30' 
                  : 'bg-dark-300 text-electric-200 hover:bg-dark-400'
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
              className="relative overflow-hidden group h-80 perspective-1000"
            >
              <div className="relative h-full transform transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-electric-300 mb-4">{item.count} films</p>
                  
                  <button className="inline-flex items-center text-electric-300 font-medium group-hover:text-electric-100 transition-colors">
                    Explore category
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-electric-500/0 group-hover:border-electric-500/50 transition-all duration-500 rounded-xl"></div>
              </div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-electric-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-electric-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-electric-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-electric-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery