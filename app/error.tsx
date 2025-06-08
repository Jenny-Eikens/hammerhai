'use client'
import React from 'react'
import { useEffect } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

type ErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error('Rendering failed:', error)
  }, [error])

  return (
    <div className="m-auto flex h-screen w-screen flex-col items-center justify-center space-y-4 text-center text-2xl">
      <ExclamationCircleIcon className="size-16" />
      <p>Es tut uns leid, der Inhalt konnte nicht geladen werden.</p>
      <button
        className="text-black underline hover:cursor-pointer"
        onClick={() => reset()}
      >
        Erneut versuchen
      </button>
    </div>
  )
}

export default Error
