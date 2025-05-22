import React from 'react'
import Ticket from './Ticket/Ticket'
import type { Concert } from '../Home'

type ConcertProps = {
  concerts: Concert[]
}

const Live = ({ concerts }: ConcertProps) => {
  return (
    <>
      <div className="gigs">
        {concerts.map((concert) => (
          <Ticket
            url={concert.venueImage.responsiveImage.src}
            key={concert.id}
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
