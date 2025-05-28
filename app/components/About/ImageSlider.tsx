'use client'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const images = [
  'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
  'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
  'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative" aria-label="Bildergallerie">
      <a href="#contact" className="skip-link">
        Bildergallerie überspringen
      </a>
      <div
        className="relative mx-auto mb-10 w-full max-w-2xl overflow-hidden"
        {...handlers}
      >
        {/* Carousel track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-64 w-full flex-shrink-0 object-cover"
              aria-hidden={currentIndex !== index}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          aria-label="Zu vorigem Bild"
          className="img-nav-btn left-3"
        >
          <ChevronLeftIcon className="h-6 w-6" strokeWidth={2} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Zu nächstem Bild"
          className="img-nav-btn right-3"
        >
          <ChevronRightIcon className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>
      <div className="absolute bottom-[-1.5rem] left-1/2 flex -translate-x-1/2 gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Zu Bild ${index + 1}`}
            className={`bg-underline h-3 w-3 rounded-full border-none p-1 transition-all ${currentIndex === index ? 'bg-underline scale-125 transition-all' : 'bg-underline/75'} hover:scale-125 hover:cursor-pointer focus-visible:scale-125`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
