import React from 'react'
import Logo from './Logo/Logo'

const Footer = () => {
  return (
    <>
      <div className="px-4 py-6">
        <div className="mb-4 flex flex-col items-center sm:items-start md:flex-row">
          <div className="scale-75 transform sm:-translate-x-[14%] sm:-translate-y-[15%] md:origin-top-left md:-translate-x-[2.5%] md:-translate-y-[4.5%]">
            <Logo />
          </div>
          <div className="mb-4 flex flex-col flex-wrap space-y-4 gap-y-4 sm:mb-0 sm:flex-row sm:space-y-0 sm:space-x-[2rem] lg:space-x-[4rem]">
            <div className="footer-details">
              <h4>BOOKING & KONKTAKT</h4>
              <address className="not-italic">
                <div>Christian Sölter</div>
                <div>Konkordiastraße 6</div>
                <div>30449 Hannover</div>
                <a href="mailto:soelti@hammerhai.net">soelti@hammerhai.net</a>
              </address>
            </div>
            <div className="footer-details">
              <h4>PRESSE</h4>
              <div>
                Presse-Paket: <span className="underline">Download</span>
              </div>
            </div>
            <div className="footer-details">
              <h4>INFORMATION</h4>
              <div>Datenschutz</div>
              <div>Disclaimer</div>
            </div>
            <div className="footer-details">
              <h4>IMPRESSUM / WEBMASTER</h4>
              <address className="not-italic">
                <div>Jens Berkmann</div>
                <div>Spichernstr.15</div>
                <div>42103 Wuppertal</div>
                <a href="mailto:jb@hammerhai.net">jb@hammerhai.net</a>
              </address>
            </div>
          </div>
        </div>
        <div className="mb-2 flex flex-col-reverse items-center justify-between sm:flex-row sm:space-y-0 sm:space-x-2">
          <div className="text-sm">
            Webseite designt und entwickelt von{' '}
            <a
              href="https://jennifereikens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Jennifer Eikens
            </a>
            .{' '}
          </div>
          <div className="mb-8 flex flex-wrap justify-center space-x-5 gap-y-5 sm:mb-0 md:justify-start">
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-black"></div>
            <div className="h-10 w-10 bg-black"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
