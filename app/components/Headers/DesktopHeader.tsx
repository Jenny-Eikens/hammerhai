import React from 'react'
import { ActiveSectionType } from '@/types/activesection'
import Logo from '../Logo/Logo'

const DesktopHeader = ({ activeSection }: ActiveSectionType) => {
  return (
    <>
      <div className="header-wrapper relative flex h-full w-full items-center justify-between pr-1 pl-4 md:space-x-2 md:px-4">
        {/* Menu toggling button and company logo on left-hand side */}
        <span className="flex w-full items-center justify-between md:max-w-[300px] md:justify-start md:space-x-2">
          {/* Logo */}
          <Logo />
        </span>

        {/* Nav bar */}
        {/* slides in from left on small screens, fixed with no transition from medium-sized screens */}
        <nav
          className={`bg-navbar relative z-40 flex h-[70%] w-auto max-w-full translate-x-0 flex-row justify-end overflow-y-auto px-4 pb-0 transition-transform duration-300`}
        >
          {/* column layout on small screens, row from medium-size */}
          <ul
            className={`flex list-none flex-wrap items-center space-x-5 gap-y-3 py-4`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`hover:text-underline flex w-auto min-w-0 flex-shrink items-center justify-center overflow-hidden bg-white text-center shadow-lg transition-colors duration-200 ${activeSection === item.target && 'border-underline border-b-6'}`}
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

export default DesktopHeader
