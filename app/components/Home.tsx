'use client'
import Header from './Header'
import Live from './Live/Live'
import Merch from './Merch/Merch'
import Sidebar from './Home/Sidebar'
import { useRef, useState, useEffect } from 'react'
import type { ConcertType } from '@/types/concert'
import type { MusicType } from '@/types/music'
import type { ClothingType } from '@/types/clothes'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Footer from './Footer'
import Carousel from './About/ImageSlider'
import Contact from './Contact'

type HomeProps = {
  concerts: ConcertType[]
  music: MusicType[]
  clothing: ClothingType[]
}

const Home = ({ concerts, music, clothing }: HomeProps) => {
  const headerRef = useRef<HTMLElement | null>(null)
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

  return (
    <>
      <a href="#main-content" className="skip-link">
        Navigation überspringen
      </a>
      <div className="m-auto w-full max-w-[1600px]">
        <header
          ref={headerRef}
          aria-label="Header"
          className="sticky top-0 z-100 h-max max-h-[200px] w-full bg-white p-1 shadow-sm md:max-h-[300px] md:px-0 md:py-2 md:shadow-none"
        >
          <Header />
        </header>

        <main id="main-content" className="border border-red-500">
          {/* MAIN CONTENT */}
          <section
            id="home"
            aria-label="Startseite"
            className="relative flex flex-col bg-white"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Sidebar />
            <a
              href="#live"
              role="button"
              id="next-section"
              aria-label="Zu nächstem Abschnitt"
              className="mx-auto mt-auto mb-4 hidden h-[4rem] w-[4rem] items-center justify-center rounded-full bg-white p-2 shadow-xl transition-all ease-out hover:scale-[1.2] hover:cursor-pointer md:flex"
            >
              <ArrowDownIcon className="text-underline h-10 w-10" />
            </a>
          </section>
          <section
            id="live"
            aria-label="Anstehende Konzerte"
            className="bg-section-gray min-h-max overflow-clip p-8 md:p-[3rem]"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Live concerts={concerts} />
          </section>
          <section
            id="merch"
            aria-label="Merch"
            className="min-h-max bg-white px-2 md:px-8"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Merch music={music} clothing={clothing} />
          </section>
          <section
            id="about"
            aria-label="Über uns"
            className="bg-section-gray min-h-max"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          ></section>
          <section
            id="contact"
            aria-label="Kontakt"
            className="min-h-max bg-white py-[3rem]"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Contact />
          </section>

          <section>
            <Carousel />
          </section>
        </main>
        <footer aria-label="Footer" id="footer" className="bg-section-gray">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Home
