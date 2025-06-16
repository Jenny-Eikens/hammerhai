import React from 'react'

const Logo = () => {
  return (
    <>
      <div
        className="m-1 max-w-[270px] bg-white p-4 shadow-lg md:m-2 md:max-w-[300px]"
        aria-label="Band logo"
      >
        <img
          src="/images/Hammerhai-Logo-Neu.gif"
          alt="Band logo"
          className="mb-2 min-w-[200px]"
        />
        <p className="text-center md:text-lg">Punkrock & Ska seit 1997</p>
      </div>
    </>
  )
}

export default Logo
