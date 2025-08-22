import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Button from '../common/Button'
import { useAnimation } from '../../hooks/useAnimation'

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const [scope] = useAnimation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      
      tl.fromTo(subtitleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      
      tl.fromTo(ctaRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
    }, scope)

    return () => ctx.revert()
  }, [scope])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-muted-50 to-muted-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center" ref={scope}>
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-muted-900 mb-6"
        >
          Discover <span className="text-primary">Next</span> Creators
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-600 max-w-3xl mx-auto mb-10"
        >
          A platform for students, indie directors, and local producers to showcase their films and connect with audiences.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Explore Films</Button>
          <Button variant="outline" size="lg">Become a Creator</Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default Hero