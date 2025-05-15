'use client'
import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  return (
    <>
      <div className="header-wrapper flex h-full w-full items-center justify-between">
        {/* Menu toggling button and company logo on left-hand side */}
        <span className="flex w-[400px] items-center justify-start">
          {/* button hidden starting at medium-sized screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="relative top-0 left-2 z-50 mr-4 p-1 md:hidden" // z-index ensures button isn't hidden under overlay
          >
            {menuOpen ? 'close svg' : 'hamburger svg'}{' '}
            {/* insert correct svg */}
          </button>
          {/* Logo */}
          <div
            className="m-4 bg-white p-4 shadow-lg md:items-start"
            aria-label="Band logo"
          >
            <img
              src="assets/images/Hammerhai-Logo-Neu.gif"
              alt="Band logo"
              className="mb-2"
            />
            <p className="text-center text-lg">Punkrock & Ska seit 1997</p>
          </div>
        </span>

        {/* Overlay */}
        <div
          className={`bg-opacity-50 fixed inset-0 z-30 bg-black transition-opacity duration-300 ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Nav bar */}
        {/* slides in from left on small screens, fixed with no transition from medium-sized screens */}
        <nav
          className={`bg-navbar fixed top-0 left-0 z-40 flex h-full w-[65vw] max-w-[300px] flex-col border border-blue-500 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:top-auto md:left-auto md:h-[70%] md:w-auto md:max-w-full md:translate-x-0 md:flex-row md:justify-end md:px-4`}
        >
          {/* column layout on small screens, row from medium-size */}
          <ul className="mt-[5rem] list-none space-y-6 border border-red-500 px-4 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 md:px-0 md:py-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`overflow-hidden bg-white px-6 py-4 shadow-lg transition-colors md:flex md:h-[75%] md:items-center md:justify-center md:text-center ${activeSection === item.target && 'md:border-underline text-underline md:border-b-6 md:text-inherit'}`}
                onClick={() => setActiveSection(item.target)}
              >
                <a href={`#${item.target}`}>{item.title}</a>
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
    target: 'home',
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
