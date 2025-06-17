'use client'
import Header from './Header'
import Live from './Live/Live'
import Merch from './Merch/Merch'
import Sidebar from './Hero/Sidebar'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { ConcertType } from '@/types/concert'
import type { MusicType } from '@/types/music'
import type { ClothingType } from '@/types/clothes'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Footer from './Footer'
import Contact from './Contact'
import Image from 'next/image'
import About from './About/About'

type HomeProps = {
  concerts: ConcertType[]
  music: MusicType[]
  clothing: ClothingType[]
}

const Home = ({ concerts, music, clothing }: HomeProps) => {
  const headerRef = useRef<HTMLElement | null>(null)
  const [activeSection, setActiveSection] = useState<string>('')
  const [headerHeight, setHeaderHeight] = useState(0)

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.6 })
  const { ref: liveRef, inView: liveInView } = useInView({ threshold: 0.6 })
  const { ref: merchRef, inView: merchInView } = useInView({ threshold: 0.3 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2 })
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.6,
  })

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

  useEffect(() => {
    if (heroInView) setActiveSection('hero')
    else if (liveInView) setActiveSection('live')
    else if (merchInView) setActiveSection('merch')
    else if (aboutInView) setActiveSection('about')
    else if (contactInView) setActiveSection('contact')
  }, [heroInView, liveInView, merchInView, aboutInView, contactInView])

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
          <Header
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </header>

        <main id="main-content">
          {/* MAIN CONTENT */}
          <section
            ref={heroRef}
            id="hero"
            aria-label="Startseite"
            className="relative flex flex-col bg-white"
            style={{
              height: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <div className="hero-wrapper flex h-full w-full items-center justify-center">
              <div
                className="relative h-[95%] w-[95%] md:hidden"
                id="hero-image-mobile"
              >
                <Image
                  src="/images/hero/mobile-cover.jpeg"
                  alt="Gruppenbild der Bandmitglieder, die im Waschsalon stehen"
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className="relative hidden h-[85%] w-[95%] md:block"
                id="hero-image-desktop"
              >
                <Image
                  src="/images/hero/desktop-cover.jpeg"
                  alt="Bild der Bandmitglieder, die in einem Park auf einer Mauer sitzen"
                  className="object-cover object-[25%_35%]"
                  fill
                />
              </div>
            </div>
            <a
              href="#live"
              role="button"
              id="next-section"
              aria-label="Zu nächstem Abschnitt"
              className="absolute bottom-5 left-1/2 mx-auto mt-auto flex h-[3rem] w-[3rem] -translate-x-1/2 items-center justify-center rounded-full bg-white p-2 shadow-xl md:hidden"
            >
              <ArrowDownIcon className="text-underline h-8 w-8" />
            </a>
            <Sidebar />
          </section>
          <section
            ref={liveRef}
            id="live"
            aria-label="Anstehende Konzerte"
            className="bg-section-gray flex w-full items-start justify-center overflow-clip px-2 py-6 sm:p-8 md:block md:p-[3rem]"
            style={{
              minHeight: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <Live concerts={concerts} />
          </section>
          <section
            ref={merchRef}
            id="merch"
            aria-label="Merch"
            className="min-h-max bg-white px-2 md:px-8"
            style={{
              minHeight: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `calc(${headerHeight - 1}px )`,
            }}
          >
            <Merch music={music} clothing={clothing} />
          </section>
          <section
            ref={aboutRef}
            id="about"
            aria-label="Über uns"
            className="bg-section-gray min-h-max overflow-hidden"
            style={{
              minHeight: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `${headerHeight}px`,
            }}
          >
            <About />
          </section>
          <section
            ref={contactRef}
            id="contact"
            aria-label="Kontakt"
            className="min-h-max bg-white py-[3rem]"
            style={{
              minHeight: `calc(100vh - ${headerHeight}px)`,
              scrollMarginTop: `calc(${headerHeight - 1}px )`,
            }}
          >
            <Contact />
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
