import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <>
      <div
        id="sidebar"
        aria-label="Links zu sozialen Netzwerken"
        className="bg-navbar relative top-1/2 left-0 hidden w-max -translate-y-1/2 space-y-10 p-3 shadow-md md:flex md:flex-col"
      >
        <a href="#next-section" className="skip-link">
          Soziale Netzwerke überspringen
        </a>
        <a
          href="https://www.youtube.com/channel/UCmM4SDtS5Ih1I05smpfGgIw"
          target="_blank"
        >
          <Image
            src="/assets/images/socials/youtube_social_icon_red.png"
            alt="YouTube logo"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://open.spotify.com/intl-de/artist/5Z215UqxnldmCALHpIwvH8"
          target="_blank"
        >
          <Image
            src="/assets/images/socials/Spotify_Primary_Logo_RGB_Green.png"
            alt="Spotify logo"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.instagram.com/hammerhai_1997/" target="_blank">
          <Image
            src="/assets/images/Socials/Instagram_Glyph_Gradient.png"
            alt="Instagram logo"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.facebook.com/p/HAMMERHAI-100063787770324/"
          target="_blank"
        >
          <Image
            src="/assets/images/socials/Facebook_Logo_Primary.png"
            alt="Facebook logo"
            width={40}
            height={40}
          />
        </a>
        <a href="https://hammerhai.bandcamp.com/" target="_blank">
          <Image
            src="/assets/images/socials/bandcamp-button-circle-green-512.png"
            alt="Bandcamp logo"
            width={40}
            height={40}
          />
        </a>
      </div>
    </>
  )
}

export default Sidebar
