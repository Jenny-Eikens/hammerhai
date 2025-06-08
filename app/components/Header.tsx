'use client'
import React from 'react'
import { useState } from 'react'
import Logo from './Logo/Logo'
import { Bars4Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import type { ActiveSectionType } from '@/types/activesection'

const Header = ({ activeSection }: ActiveSectionType) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="header-wrapper relative flex h-full w-full items-center justify-between pr-1 pl-4 md:space-x-2 md:px-4">
        {/* Menu toggling button and company logo on left-hand side */}
        <span className="flex w-full items-center justify-between md:max-w-[300px] md:justify-start md:space-x-2">
          {/* button hidden starting at medium-sized screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            className="bg-navbar sticky top-0 z-50 scale-150 p-1 md:hidden" // z-index ensures button isn't hidden under overlay
          >
            {menuOpen ? (
              <XMarkIcon className="size-6" />
            ) : (
              <Bars4Icon className="size-6" />
            )}
          </button>
          {/* Logo */}
          <Logo />
        </span>

        {/* Overlay */}
        <div
          className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden
        ></div>

        {/* Nav bar */}
        {/* slides in from left on small screens, fixed with no transition from medium-sized screens */}
        <nav
          className={`bg-navbar fixed top-0 left-0 z-40 flex h-full w-[75%] max-w-[450px] flex-col overflow-y-auto pb-2 transition-transform duration-300 md:pb-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:top-auto md:left-auto md:h-[70%] md:w-auto md:max-w-full md:translate-x-0 md:flex-row md:justify-end md:px-4`}
        >
          {/* column layout on small screens, row from medium-size */}
          <ul className="mt-[8rem] list-none space-y-10 px-4 md:mt-0 md:flex md:flex-row md:flex-wrap md:items-center md:space-y-0 md:space-x-5 md:gap-y-3 md:px-0 md:py-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`hover:text-underline overflow-hidden bg-white shadow-lg transition-colors duration-200 md:flex md:w-auto md:min-w-0 md:flex-shrink md:items-center md:justify-center md:text-center ${activeSection === item.target && 'md:border-underline text-underline md:border-b-6 md:text-inherit'}`}
              >
                <a
                  className="focus-visible:text-underline block h-full w-full px-6 py-4"
                  href={`#${item.target}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

const navItems = [
  {
    target: 'hero',
    title: 'Start',
  },
  {
    target: 'live',
    title: 'Live-Termine',
  },
  {
    target: 'merch',
    title: 'Merch',
  },
  {
    target: 'about',
    title: 'Über uns',
  },
  {
    target: 'contact',
    title: 'Booking / Kontakt',
  },
]

export default Header
