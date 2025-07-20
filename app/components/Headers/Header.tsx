import React from 'react'
import type { ActiveSectionType } from '@/types/activesection'
import { useResponsiveLayout } from '../../hooks/useResponsiveLayout'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

const Header = ({ activeSection }: ActiveSectionType) => {
  const { isMobile, isMobileLandscape, hasResolvedLayout } =
    useResponsiveLayout()

  if (!hasResolvedLayout) return null

  return (
    <>
      {isMobile || isMobileLandscape ? (
        <MobileHeader activeSection={activeSection} />
      ) : (
        <DesktopHeader activeSection={activeSection} />
      )}
    </>
  )
}

export default Header
