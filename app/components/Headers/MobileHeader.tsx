'use client'
import React from 'react'
import { useState } from 'react'
import Logo from '../Logo/Logo'
import { Bars4Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ActiveSectionType } from '@/types/activesection'

const MobileHeader = ({ activeSection }: ActiveSectionType) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="header-wrapper relative flex h-full w-full items-center justify-between pr-1 pl-4">
        {/* Menu toggling button and company logo on left-hand side */}
        <span className="flex w-full items-center justify-between">
          {/* button hidden starting at medium-sized screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            className="bg-navbar sticky top-0 z-50 scale-150 p-1" // z-index ensures button isn't hidden under overlay
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
          className={`bg-navbar fixed top-0 left-0 z-40 flex h-full w-[75%] max-w-[450px] flex-col overflow-y-auto pb-2 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* column layout on small screens, row from medium-size */}
          <ul className={`mt-[8rem] list-none space-y-10 px-4`}>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`hover:text-underline overflow-hidden bg-white shadow-lg transition-colors duration-200 ${activeSection === item.target && 'text-underline'}`}
              >
                <a
                  className="focus-visible:text-underline block h-full w-full px-6 py-4"
                  href={`#${item.target}`}
                  onClick={() => setMenuOpen(false)}
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

export default MobileHeader
