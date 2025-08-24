import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import useAnimation from '../hooks/UseAnimation.jsx';
const SectionTitle = ({ title, subtitle, className = '' }) => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const [scope] = useAnimation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      
      gsap.fromTo(subtitleRef.current, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
      )
    }, scope)

    return () => ctx.revert()
  }, [scope])

  return (
    <div className={`text-center mb-16 ${className}`} ref={scope}>
      <h2 
        ref={titleRef}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-900 mb-4"
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          ref={subtitleRef}
          className="text-xl text-muted-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle