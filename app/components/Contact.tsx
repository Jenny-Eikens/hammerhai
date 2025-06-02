'use client'
import React from 'react'
import { useState, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { Inputs } from '@/types/inputs'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleOpenModal = () => {
    if (dialogRef.current) {
      dialogRef.current.show()
      setIsOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    setTimeout(() => dialogRef.current?.close(), 400)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fname: undefined,
      lname: undefined,
      company: undefined,
      email: undefined,
      street: undefined,
      addressNumber: undefined,
      zip: undefined,
      city: undefined,
      phone: undefined,
      message: undefined,
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch('https://formspree.io/f/FORMSPREE_KEY', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      reset()
      handleOpenModal()
    } else {
      console.error('Submission failed')
    }
  }

  return (
    <>
      <div className="relative">
        <a href="#footer" className="skip-link">
          Kontaktformular überspringen
        </a>

        <form
          noValidate
          className="bg-underline m-auto w-[95vw] max-w-[800px] space-y-2 rounded-md p-8 text-white"
          action="https://formspree.io/f/movdgpok"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <h2 className="text-[2rem]">Kontakt</h2>
          <p className="text-white/80">
            Schreibt uns gerne eine Nachricht mit eurem Anliegen und wir melden
            uns so schnell wie möglich zurück.
          </p>

          <div className="mt-10 grid gap-4">
            <div id="name">
              <div id="fname">
                <label htmlFor="fname" className="sr-only">
                  Vorname
                </label>
                <input
                  {...register('fname', {
                    required: true,
                    pattern: {
                      value: /^[\p{L}\p{M}\s'-]+$/u,
                      message: 'Name darf nur Buchstaben beinhalten',
                    },
                  })}
                  type="text"
                  placeholder="Vorname *"
                  id="fname"
                  name="fname"
                  className={`w-full ${errors.fname && 'error'}`}
                  aria-describedby={errors.fname ? 'fname-error' : undefined}
                />
                {errors.fname && (
                  <p id="fname-error" className="error-message">
                    {errors.fname.message}
                  </p>
                )}
              </div>

              <div id="lname">
                <label htmlFor="lname" className="sr-only">
                  Nachname
                </label>
                <input
                  {...register('lname', {
                    required: true,
                    pattern: {
                      value: /^[\p{L}\p{M}\s'-]+$/u,
                      message: 'Name darf nur Buchstaben beinhalten',
                    },
                  })}
                  type="text"
                  placeholder="Nachname *"
                  id="lname"
                  name="lname"
                  className={`w-full ${errors.lname && 'error'}`}
                  aria-describedby={errors.lname ? 'lname-error' : undefined}
                />
                {errors.lname && (
                  <p id="lname-error" className="error-message">
                    {errors.lname.message}
                  </p>
                )}
              </div>
            </div>

            <div id="company">
              <label htmlFor="company" className="sr-only">
                Firma
              </label>
              <input
                {...register('company', {
                  required: false,
                  pattern: {
                    value: /^[\p{L}\p{M}\d\s.,&()\/'+-]+$/u,
                    message: 'Bitte gib einen gültigen Namen ein',
                  },
                })}
                type="text"
                placeholder="Firma"
                id="company"
                name="company"
                className={`w-full ${errors.company && 'error'}`}
                aria-describedby={errors.company ? 'company-error' : undefined}
              />
              {errors.company && (
                <p id="company-error" className="error-message">
                  {errors.company.message}{' '}
                </p>
              )}
            </div>

            <div id="email">
              <label htmlFor="email" className="sr-only">
                Email-Adresse
              </label>
              <input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Bitte gib eine gültige Email-Adresse ein',
                  },
                })}
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                className={`w-full ${errors.email && 'error'}`}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="error-message">
                  {errors.email.message}{' '}
                </p>
              )}
            </div>

            <div id="address" className="grid gap-[1rem]">
              <div id="street">
                <div id="street-name">
                  <label htmlFor="street" className="sr-only">
                    Straße
                  </label>
                  <input
                    {...register('street', {
                      required: false,
                      pattern: {
                        value: /^[\p{L}\p{M}\s.'-]+$/u,
                        message: 'Bitte gib einen gültigen Straßennamen ein',
                      },
                    })}
                    className={`w-full ${errors.street && 'error'}`}
                    aria-describedby={
                      errors.street ? 'street-error' : undefined
                    }
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Straße"
                  />
                  {errors.street && (
                    <p id="street-error" className="error-message">
                      {errors.street.message}
                    </p>
                  )}
                </div>

                <div id="house-number">
                  <label htmlFor="addressNumber" className="sr-only">
                    Hausnummer
                  </label>
                  <input
                    {...register('addressNumber', {
                      required: false,
                      pattern: {
                        value: /^[0-9]{1,5}[a-zA-Z]?(-[0-9]{1,5}[a-zA-Z]?)?$/,
                        message: 'Bitte gib eine gültige Hausnummer ein',
                      },
                    })}
                    className={`w-full ${errors.addressNumber && 'error'}`}
                    aria-describedby={
                      errors.addressNumber ? 'addressNumber-error' : undefined
                    }
                    type="text"
                    id="addressNumber"
                    name="addressNumber"
                    placeholder="Hausnummer"
                  />
                  {errors.addressNumber && (
                    <p id="addressNumber-error" className="error-message">
                      {errors.addressNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <div id="town">
                <div id="zip-code">
                  <label htmlFor="zip" className="sr-only">
                    Postleitzahl
                  </label>
                  <input
                    {...register('zip', {
                      required: false,
                      pattern: {
                        value: /^[A-Z0-9\s-]{3,10}$/i,
                        message: 'Bitte gib eine gültige Postleitzahl ein',
                      },
                    })}
                    type="text"
                    id="zip"
                    placeholder="Postleitzahl"
                    name="zip"
                    className={`w-full ${errors.zip && 'error'}`}
                    aria-describedby={errors.zip ? 'zip-error' : undefined}
                  />
                  {errors.zip && (
                    <p id="zip-error" className="error-message">
                      {errors.zip.message}
                    </p>
                  )}
                </div>

                <div id="city-name">
                  <label htmlFor="city" className="sr-only">
                    Stadt
                  </label>
                  <input
                    {...register('city', {
                      required: false,
                      pattern: {
                        value: /^[\p{L}\p{M}\s'-]+$/u,
                        message: 'Bitte gib eine gültige Stadt ein',
                      },
                    })}
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Stadt"
                    className={`w-full ${errors.city && 'error'}`}
                    aria-describedby={errors.city ? 'city-error' : undefined}
                  />
                  {errors.city && (
                    <p id="city-error" className="error-message">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div id="phone">
              <label htmlFor="phone" className="sr-only">
                Telefonnummer
              </label>
              <input
                {...register('phone', {
                  required: false,
                  pattern: {
                    value: /^\+?[0-9\s-]{8,20}$/,
                    message: 'Bitte gib eine gültige Telefonnummer ein',
                  },
                })}
                className={`w-full ${errors.phone && 'error'}`}
                type="tel"
                name="phone"
                id="phone"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder="Telefonnummer"
              />
              {errors.phone && (
                <p id="phone-error" className="error-message">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div id="message">
              <label htmlFor="message" className="sr-only">
                Nachricht
              </label>
              <textarea
                {...register('message', {
                  required: true,
                })}
                name="message"
                id="message"
                placeholder="Nachricht *"
                className={`field-sizing-content max-h-[12lh] min-h-[5lh] w-full resize-none ${errors.message && 'error'}`}
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>

              <p className="text-sm">* Pflichtfeld</p>
            </div>

            <button
              type="submit"
              className="text-underline group flex items-center justify-center space-x-2 rounded-md bg-white/85 p-2 transition-colors hover:cursor-pointer hover:bg-white"
            >
              <span>Senden</span>{' '}
              <ArrowLongRightIcon className="text-underline w-10 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </form>

        <dialog
          ref={dialogRef}
          className={`fixed top-1 left-1/2 z-[500] w-[95%] max-w-2xl -translate-x-1/2 rounded-md p-6 shadow-md transition-transform duration-400 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">
              Anfrage erfolgreich eingereicht
            </h3>
            <button
              className="hover:cursor-pointer"
              aria-label="Dialogfeld schließen"
              onClick={handleCloseModal}
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <p className="py-4">
            Vielen Dank für deine Nachricht. Wir werden dein Anliegen so schnell
            wie möglich bearbeiten.
          </p>
          <div className="modal-action">
            <button
              className="btn"
              aria-label="Dialogfeld schließen"
              onClick={handleCloseModal}
            >
              Schließen
            </button>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Contact
