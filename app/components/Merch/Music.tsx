import React from 'react'
import type { MusicType } from '@/types/music'
import { Image as DatoImage } from 'react-datocms'

type MusicProps = {
  music: MusicType[]
}

const Music = ({ music }: MusicProps) => {
  return (
    <>
      <div className="border border-red-500">
        <div className="mb-8 text-left md:mb-10">
          <h2 className="bg-navbar inline p-2 shadow-md">CD / Vinyl / DVD</h2>
        </div>
        <div className="music-grid border-2 border-blue-500">
          {music.map((album) => (
            <>
              <div key={album.id} className="space-y-2 border border-green-500">
                <div className="relative max-w-[260px]">
                  <DatoImage data={album.productImage.responsiveImage} />
                  <div className="absolute bottom-1 left-1 flex h-[6rem] w-[6rem] flex-wrap items-center justify-center rounded-full bg-white p-2 text-center text-sm text-black">
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
