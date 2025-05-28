'use client'
import React from 'react'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { Inputs } from '@/types/inputs'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fname: undefined,
      lname: undefined,
      email: undefined,
      phone: undefined,
      message: undefined,
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    setIsSubmitted(true)
    reset()
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
          action="https://formsubmit.co/jennifereikens@web.de"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          {isSubmitted && <p>Success!</p>}
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
                    required: 'Pflichtfeld',
                    pattern: {
                      value: /^[\p{L}\p{M}\s'-]+$/u,
                      message: 'Name darf nur Buchstaben beinhalten',
                    },
                  })}
                  type="text"
                  placeholder="Vorname"
                  id="fname"
                  name="fname"
                  className={`w-full ${errors.fname && 'error'}`}
                  aria-describedby={errors.fname ? 'fname-error' : undefined}
                />
                {errors.fname && (
                  <p className="error-message">{errors.fname.message}</p>
                )}
              </div>

              <div id="lname">
                <label htmlFor="lname" className="sr-only">
                  Nachname
                </label>
                <input
                  {...register('lname', {
                    required: 'Pflichtfeld',
                    pattern: {
                      value: /^[\p{L}\p{M}\s'-]+$/u,
                      message: 'Name darf nur Buchstaben beinhalten',
                    },
                  })}
                  type="text"
                  placeholder="Nachname"
                  id="lname"
                  name="lname"
                  className={`w-full ${errors.lname && 'error'}`}
                  aria-describedby={errors.lname ? 'lname-error' : undefined}
                />
                {errors.lname && (
                  <p className="error-message">{errors.lname.message} </p>
                )}
              </div>
            </div>

            <div id="email">
              <label htmlFor="email" className="sr-only">
                Email-Adresse
              </label>
              <input
                {...register('email', {
                  required: 'Pflichtfeld',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Bitte gib eine gültige Email-Adresse ein',
                  },
                })}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`w-full ${errors.email && 'error'}`}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message} </p>
              )}
            </div>

            <div id="phone">
              <label htmlFor="phone" className="sr-only">
                Telefonnummer (optional)
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
                placeholder="Telefonnummer (optional)"
              />
              {errors.phone && (
                <p className="error-message">{errors.phone.message}</p>
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
                placeholder="Nachricht"
                className={`field-sizing-content max-h-[12lh] min-h-[5lh] w-full resize-none ${errors.message && 'error'}`}
              ></textarea>
              {errors.message && <p className="error-message">Pflichtfeld</p>}
            </div>

            <button
              type="submit"
              className="text-underline flex items-center justify-center space-x-2 rounded-md bg-white/85 p-2 transition-colors hover:cursor-pointer hover:bg-white"
            >
              <span>Senden</span>{' '}
              <ArrowLongRightIcon className="text-underline w-10" />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
