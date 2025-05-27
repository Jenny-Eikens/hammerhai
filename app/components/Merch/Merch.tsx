import React from 'react'
import Music from './Music'
import Clothing from './Clothing'
import type { MusicType } from '@/types/music'
import type { ClothingType } from '@/types/clothes'

type MerchProps = {
  music: MusicType[]
  clothing: ClothingType[]
}

const Merch = ({ music, clothing }: MerchProps) => {
  return (
    <>
      <div className="space-y-5 px-2 py-[3rem] text-center text-lg md:px-[5rem]">
        <div className="mb-[6rem] space-y-5">
          <h1 className="text-4xl">Mailorder</h1>
          <p>
            Und so wird&apos;s gemacht: Schreibt einfach eine Mail an{' '}
            <a
              href="mailto:soelti@hammerhai.net"
              className="text-underline underline"
            >
              soelti@hammerhai.net
            </a>{' '}
            oder nutzt unser Kontaktformular
          </p>
          <p>Bitte angeben: die gewünschte Ware und Eure Adresse</p>
          <p>Preise zzgl. Versandkosten</p>
        </div>

        <div className="space-y-[6rem]">
          <Music music={music} />
          <Clothing clothing={clothing} />
        </div>
      </div>
    </>
  )
}

export default Merch
