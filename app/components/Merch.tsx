import React from 'react'

const Merch = () => {
  return (
    <>
      <div className="space-y-5 border border-blue-500 p-6 text-center text-lg">
        <h1 className="text-4xl">Mailorder</h1>
        <p>
          Und so wird&apos;s gemacht: Schreibt einfach eine Mail an{' '}
          <a
            href="mailto:soelti@hammerhai.net"
            className="text-underline underline"
          >
            soelti@hammerhai.net
          </a>{' '}
          oder nutzt unser Kontaktformular
        </p>
        <p>Bitte angeben: die gewünschte Ware und Eure Adresse</p>
        <p>Versandkosten: 2,70€ - 5€</p>
      </div>
    </>
  )
}

export default Merch
