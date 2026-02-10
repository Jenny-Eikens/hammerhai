import React from 'react'
import Barcode from './Barcode'
import type { ConcertType } from '@/types/concert'
import { Image as DatoImage } from 'react-datocms'

const Ticket = ({
  venueImage,
  address,
  date,
  time,
  price,
  doors,
}: ConcertType) => {
  const formattedDate = new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
  }).format(new Date(date))

  return (
    <>
      <div
        className="gig-wrapper m-auto flex min-h-[9rem] max-w-[700px] origin-top scale-[58%] rounded-xs bg-white pr-1 sm:scale-90 md:scale-100"
        aria-label="Live-Termin"
      >
        <DatoImage data={venueImage.responsiveImage} className="rounded-l-xs" />

        <div className="flex w-full flex-col justify-between p-4">
          <div className="flex justify-between text-sm">
            <span>LIVE</span>
            <span className="ml-4 text-right text-wrap">{address}</span>
          </div>
          <h1 className="text-4xl font-bold">Hammerhai</h1>
          <div className="flex justify-between space-x-2">
            <span className="gig-details">{formattedDate}</span>
            <span className="gig-details">
              {time === 'tba' || !time ? 'Uhrzeit: tba' : time + ' Uhr'}{' '}
            </span>
            <span className="gig-details">
              Preis: {price === 'tba' || !price ? 'tba' : price + ' €'}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col justify-between">
          <div className="h-2 w-4 rounded-b-full bg-black"></div>
          <div className="absolute left-1/2 h-full -translate-x-1/2 border-r-2 border-dashed border-black"></div>
          <div className="h-2 w-4 rounded-t-full bg-black"></div>
        </div>

        <div className="my-auto pl-4">
          <Barcode />
        </div>

        <div className="m-auto p-1" aria-hidden>
          <div className="rotation h-[9rem] space-y-3">
            <div className="flex w-full justify-between">
              <span className="text-xs">Ticket-Nr.</span>
              <span className="text-xs">0123456789</span>
            </div>
            {doors && (
              <span className="block text-sm font-semibold">
                Einlass {doors === 'tba' || !doors ? 'tba' : doors + 'Uhr'}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Ticket
