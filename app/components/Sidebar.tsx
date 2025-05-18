import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <>
      <div className="bg-navbar relative top-1/2 left-0 hidden w-max -translate-y-1/2 space-y-10 rounded-xs p-3 shadow-md md:flex md:flex-col">
        <a href="">
          <Image
            src="/assets/images/socials/Spotify_Primary_Logo_RGB_Green.png"
            alt="Spotify logo"
            width={40}
            height={40}
          />
        </a>
        <a href="">
          <Image
            src="/assets/images/socials/Facebook_Logo_Primary.png"
            alt="Facebook logo"
            width={40}
            height={40}
          />
        </a>
        <a href="">
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
