'use client'
import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  const burgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  )

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  )

  return (
    <>
      <div className="header-wrapper relative flex h-full w-full items-center justify-between pr-2 pl-4 md:px-4">
        {/* Menu toggling button and company logo on left-hand side */}
        <span className="flex w-full items-center justify-between space-x-2 md:max-w-[400px] md:justify-start">
          {/* button hidden starting at medium-sized screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="relative top-0 z-50 scale-150 p-1 md:hidden" // z-index ensures button isn't hidden under overlay
          >
            {menuOpen ? closeIcon : burgerIcon}
          </button>
          {/* Logo */}
          <div
            className="m-1 max-w-[300px] bg-white p-4 shadow-lg md:m-2"
            aria-label="Band logo"
          >
            <img
              src="assets/images/Hammerhai-Logo-Neu.gif"
              alt="Band logo"
              className="mb-2 min-w-[200px]"
            />
            <p className="text-center md:text-lg">Punkrock & Ska seit 1997</p>
          </div>
        </span>

        {/* Overlay */}
        <div
          className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Nav bar */}
        {/* slides in from left on small screens, fixed with no transition from medium-sized screens */}
        <nav
          className={`bg-navbar fixed top-0 left-0 z-40 flex h-full w-[75%] max-w-[300px] flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:top-auto md:left-auto md:h-[70%] md:w-auto md:max-w-full md:translate-x-0 md:flex-row md:justify-end md:px-4`}
        >
          {/* column layout on small screens, row from medium-size */}
          <ul className="mt-[8rem] list-none space-y-6 px-4 md:mt-0 md:flex md:flex-row md:flex-wrap md:items-center md:space-y-0 md:space-x-6 md:gap-y-2 md:px-0 md:py-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`overflow-hidden bg-white px-6 py-4 shadow-lg transition-colors md:flex md:w-auto md:min-w-0 md:flex-shrink md:items-center md:justify-center md:text-center ${activeSection === item.target && 'md:border-underline text-underline md:border-b-6 md:text-inherit'}`}
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
