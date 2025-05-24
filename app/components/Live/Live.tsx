import React from 'react'
import Ticket from './Ticket/Ticket'
import type { ConcertType } from '@/types/Concert'

type ConcertProps = {
  concerts: ConcertType[]
}

const Live = ({ concerts }: ConcertProps) => {
  return (
    <>
      <div className="gigs">
        {concerts.map((concert) => (
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
        ))}
      </div>
    </>
  )
}

export default Live
