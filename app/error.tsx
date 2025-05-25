'use client'
import React from 'react'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error('Rendering failed:', error)
  }, [error])

  return (
    <div className="m-auto flex flex-col items-center justify-center space-y-4 text-center text-2xl">
      <p>Es tut uns leid, der Inhalt konnte nicht geladen werden.</p>
      <button
        className="bg-white p-2 text-black transition-colors duration-200 hover:bg-black hover:text-white"
        onClick={() => reset()}
      >
        Erneut versuchen
      </button>
    </div>
  )
}

export default Error
