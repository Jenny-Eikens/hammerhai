import React from 'react'
import Logo from './Logo/Logo'

const Footer = () => {
  return (
    <>
      <div className="flex flex-row border border-violet-600 px-4 py-6">
        <div className="origin-top-left -translate-y-[3.5%] scale-75 transform border border-amber-500">
          <Logo />
        </div>
        <div className="flex flex-wrap space-x-[2rem] gap-y-4 lg:space-x-[4rem]">
          <div className="border border-cyan-500">
            <h4 className="mb-6">BOOKING & KONKTAKT</h4>
            <address className="not-italic">
              <div>Christian Sölter</div>
              <div>Konkordiastraße 6</div>
              <div>30449 Hannover</div>
              <a href="mailto:soelti@hammerhai.net">soelti@hammerhai.net</a>
            </address>
          </div>
          <div className="border border-cyan-500">
            <h4 className="mb-6">PRESSE</h4>
            <span>
              Presse-Paket: <span className="underline">Download</span>
            </span>
          </div>
          <div className="border border-cyan-500">
            <h4 className="mb-6">INFORMATION</h4>
            <div>Datenschutz</div>
            <div>Disclaimer</div>
          </div>
          <div className="border border-cyan-500">
            <h4 className="mb-6">IMPRESSUM / WEBMASTER</h4>
            <address className="not-italic">
              <div>Jens Berkmann</div>
              <div>Spichernstr.15</div>
              <div>42103 Wuppertal</div>
              <a href="mailto:jb@hammerhai.net">jb@hammerhai.net</a>
            </address>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-y-2 pr-4 pb-2 pl-6">
        <div className="border border-green-500">
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
        <div className="flex flex-wrap space-x-5 gap-y-5 border border-green-500">
          <div className="h-10 w-10 bg-black"></div>
          <div className="h-10 w-10 bg-black"></div>
          <div className="h-10 w-10 bg-black"></div>
          <div className="h-10 w-10 bg-black"></div>
          <div className="h-10 w-10 bg-black"></div>
          <div className="h-10 w-10 bg-black"></div>
          <div className="h-10 w-10 bg-black"></div>
        </div>
      </div>
    </>
  )
}

export default Footer
