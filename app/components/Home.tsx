'use client'
import Header from './Header'
import Live from './Live/Live'
import Sidebar from './Sidebar'
import { useRef, useState, useEffect } from 'react'

const Home = ({ concerts }) => {
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }

    updateHeaderHeight()

    if (!window === undefined) {
      window.addEventListener('resize', updateHeaderHeight)
      return () => window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  )

  return (
    <>
      <div className="m-auto w-full max-w-[1600px]">
        <header
          ref={headerRef}
          className="sticky top-0 z-100 h-max max-h-[200px] w-full border border-green-500 bg-transparent bg-white px-1 md:px-0 md:py-2"
        >
          <Header />
        </header>

        <main className="border border-red-500">
          {/* MAIN CONTENT */}
          <section
            id="home"
            className="relative flex min-h-max flex-col border border-blue-500 bg-white"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Sidebar />
            <a
              href="#live"
              className="mx-auto mt-auto mb-4 hidden h-[4rem] w-[4rem] items-center justify-center rounded-full bg-white shadow-xl transition-all ease-out hover:scale-[1.2] hover:cursor-pointer md:flex"
            >
              <span className="text-underline scale-150">{downArrow}</span>
            </a>
          </section>
          <section
            id="live"
            className="bg-section-gray min-h-max p-8"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Live concerts={concerts} />
          </section>
          <section
            id="merch"
            className="min-h-max bg-white"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          ></section>
          <section
            id="about"
            className="bg-section-gray min-h-max"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          ></section>
          <section
            id="contact"
            className="min-h-max bg-white"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          ></section>
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default Home
