import React from 'react'
import Ticket from './Ticket/Ticket'

const Live = () => {
  return (
    <>
      <div className="gigs border border-green-500">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </>
  )
}

export default Live
