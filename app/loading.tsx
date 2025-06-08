import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <>
      <div className="m-auto flex flex-col items-center justify-center space-y-4 text-center text-2xl">
        <FontAwesomeIcon icon={faSpinner} spinPulse size="lg" />
        <div>Inhalt lädt...</div>
      </div>
    </>
  )
}

export default Loading
