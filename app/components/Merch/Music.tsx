import React from 'react'

const Music = () => {
  return (
    <>
      <div className="music-grid grid gap-2">
        <div className="relative">
          <img
            src="/assets/images/Music/Hammerhai_LP-Schnellweg.jpg"
            alt="Album cover"
            className="aspect-square max-w-300"
          />
          <div className="absolute bottom-1 left-1 flex flex-wrap items-center justify-center rounded-full bg-white text-center text-sm text-black">
            LP schwarz 13€ / weiß 16€
          </div>
          <h2>Unter&apos;m Schnellweg (2019)</h2>
        </div>
      </div>
    </>
  )
}

export default Music
