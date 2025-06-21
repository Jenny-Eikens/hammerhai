import React from 'react'
import type { MusicType } from '@/types/music'
import { Image as DatoImage } from 'react-datocms'

type MusicProps = {
  music: MusicType[]
}

const Music = ({ music }: MusicProps) => {
  return (
    <>
      <div>
        <div className="mb-8 text-center sm:text-left md:mb-10">
          <h2 className="bg-navbar inline p-2 shadow-md">CD / Vinyl / DVD</h2>
        </div>
        <div className="music-grid flex flex-col items-center sm:grid sm:items-start">
          {music.map((album) => (
            <>
              <div key={album.id} className="max-w-[260px] space-y-2">
                <div className="relative aspect-square overflow-hidden">
                  <DatoImage data={album.productImage.responsiveImage} />
                  <div className="absolute bottom-1 left-1 flex h-[6.2rem] w-[6.2rem] flex-wrap items-center justify-center rounded-full bg-white p-[8px] text-center text-sm text-black">
                    {album.price}
                  </div>
                </div>
                <h3 className="text-left">
                  {album.title} ({new Date(album.year).getFullYear()})
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Music
