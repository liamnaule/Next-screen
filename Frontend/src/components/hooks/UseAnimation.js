import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeInUp = (delay = 0) => {
  return {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }
}

export const stagger = (index, staggerDelay = 0.1) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * staggerDelay }
  }
}

export const splitText = (text) => {
  return text.split('').map((char, i) => (
    <span key={i} className="inline-block" style={{ animationDelay: `${i * 0.05}s` }}>
      {char}
    </span>
  ))
}

export const maskedLines = (element) => {
  gsap.set(element, { perspective: 400 })
  gsap.set(element, { rotationX: 90, transformOrigin: "50% 0%", opacity: 0 })
  
  return gsap.to(element, {
    duration: 1,
    rotationX: 0,
    opacity: 1,
    stagger: 0.1,
    ease: "power2.out"
  })
}

export const swipeGallery = (container) => {
  const panels = gsap.utils.toArray(container.children)
  
  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
      pinSpacing: false
    })
  })
  
  ScrollTrigger.create({
    snap: 1 / (panels.length - 1)
  })
}