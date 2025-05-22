import React from 'react'
import Ticket from './Ticket/Ticket'

const Live = ({ concerts }) => {
  return (
    <>
      <div className="gigs border border-green-500">
        {concerts.map((concert) => (
          <div key={concert.id}>{concert.address}</div>
        ))}
      </div>
    </>
  )
}

export default Live
