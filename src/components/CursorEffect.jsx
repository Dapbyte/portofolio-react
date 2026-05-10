import { useEffect } from 'react'

function CursorEffect() {
  useEffect(() => {
    let ticking = false

    const updateParallax = () => {
      const scrollY = window.scrollY

      document.documentElement.style.setProperty(
        '--parallax-soft',
        `${scrollY * -0.035}px`,
      )
      document.documentElement.style.setProperty(
        '--parallax-medium',
        `${scrollY * -0.06}px`,
      )
      document.documentElement.style.setProperty(
        '--parallax-deep',
        `${scrollY * -0.1}px`,
      )
      ticking = false
    }

    const requestParallaxUpdate = () => {
      if (ticking) return
      window.requestAnimationFrame(updateParallax)
      ticking = true
    }

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty(
        '--cursor-x',
        `${event.clientX}px`,
      )
      document.documentElement.style.setProperty(
        '--cursor-y',
        `${event.clientY}px`,
      )
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true })
    updateParallax()

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', requestParallaxUpdate)
    }
  }, [])

  return null
}

export default CursorEffect
