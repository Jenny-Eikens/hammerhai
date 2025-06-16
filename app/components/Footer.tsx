import React from 'react'
import Logo from './Logo/Logo'
import Link from 'next/link'
import Image from 'next/image'
import {
  faSpotify,
  faYoutube,
  faFacebook,
  faBandcamp,
  faDeezer,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <>
      <div className="px-4 py-6">
        <div className="mb-4 flex flex-col items-center sm:items-start md:flex-row">
          <div className="scale-75 transform sm:-translate-x-[14%] sm:-translate-y-[15%] md:origin-top-left md:-translate-x-[2.5%] md:-translate-y-[4.5%]">
            <Logo />
          </div>
          <div className="mb-4 flex flex-col flex-wrap space-y-4 gap-y-6 sm:mb-0 sm:flex-row sm:space-y-0 sm:space-x-[2rem] lg:space-x-[3rem]">
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
                Presse-Paket:{' '}
                <a
                  href="/downloads/HAMMERHAI_Presse-Paket.zip"
                  download
                  className="underline"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="footer-details">
              <h4>INFORMATION</h4>
              <Link href="/datenschutz" className="block text-xs md:text-sm">
                Datenschutz
              </Link>
              <Link href="/disclaimer" className="block text-xs md:text-sm">
                Disclaimer
              </Link>
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
          <div className="socials-wrapper mb-8 flex flex-wrap items-center justify-center gap-y-5 sm:mb-0 md:justify-start">
            <a
              href="https://open.spotify.com/intl-de/artist/5Z215UqxnldmCALHpIwvH8"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSpotify}
                size="2x"
                className="text-black"
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCmM4SDtS5Ih1I05smpfGgIw"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="text-black"
              />
            </a>

            <a href="https://www.instagram.com/hammerhai_1997/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-black"
              />
            </a>

            <a
              href="https://music.apple.com/de/artist/hammerhai/303557549"
              target="_blank"
            >
              <Image
                src="/images/Socials/black.svg"
                alt="Apple Music logo"
                height={32}
                width={32}
              />
            </a>

            <a
              href="https://www.facebook.com/p/HAMMERHAI-100063787770324/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="text-black"
              />
            </a>

            <a href="https://hammerhai.bandcamp.com/" target="_blank">
              <FontAwesomeIcon
                icon={faBandcamp}
                size="2x"
                className="text-black"
              />
            </a>

            <a href="https://www.deezer.com/de/artist/274430" target="_blank">
              <FontAwesomeIcon
                icon={faDeezer}
                size="xl"
                className="text-black"
              />
            </a>

            <a
              href="https://music.amazon.de/artists/B002S2X8WK/hammerhai?referrer=https://www.google.com/"
              target="_blank"
            >
              <Image
                src="/images/Socials/Amazon_Music_Logo_Stacked_RGB_Entertainment_Dark_MASTER.png"
                width={32}
                height={32}
                alt="Amazon Music logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
