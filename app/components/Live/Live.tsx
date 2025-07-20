import React from 'react'
import Ticket from './Ticket/Ticket'
import type { ConcertType } from '@/types/concert'

type ConcertProps = {
  concerts: ConcertType[]
}

const Live = ({ concerts }: ConcertProps) => {
  if (concerts.length === 0) {
    return (
      <>
        <div className="space-y-4 text-center">
          <h1 className="text-3xl underline">Live-Termine</h1>
          <p className="text-2xl">
            &#128546; Hier gibt es im Moment nichts zu sehen. Schau gerne zu
            einem späteren Zeitpunkt noch mal vorbei!
          </p>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="gigs-grid">
        {concerts.map((concert) => (
          <>
            <Ticket
              id={concert.id}
              key={concert.id}
              venueImage={concert.venueImage}
              address={concert.address}
              date={concert.date}
              time={concert.time}
              price={concert.price}
              doors={concert.doors}
            />
          </>
        ))}
      </div>
    </>
  )
}

export default Live
