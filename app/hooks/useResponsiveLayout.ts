import { useEffect, useState } from 'react'

export function useResponsiveLayout() {
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileLandscape, setIsMobileLandscape] = useState(false)
  const [hasResolvedLayout, setHasResolvedLayout] = useState(false)

  useEffect(() => {
    const checkLayout = () => {
      const width = window.innerWidth
      const isLandscape = window.matchMedia('(orientation: landscape)').matches

      setIsMobile(width < 768)
      setIsMobileLandscape(width < 768 && isLandscape)
      setHasResolvedLayout(true)
    }

    const delay = setTimeout(() => {
      checkLayout()
    }, 100)

    window.addEventListener('resize', checkLayout)
    window.addEventListener('orientationchange', checkLayout)

    return () => {
      clearTimeout(delay)
      window.removeEventListener('resize', checkLayout)
      window.removeEventListener('orientationchange', checkLayout)
    }
  }, [])

  return { isMobile, isMobileLandscape, hasResolvedLayout }
}
