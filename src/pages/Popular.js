import React from 'react'
import popular01 from '../assets/popular01.png'
import popular02 from '../assets/popular02.png'
import popular03 from '../assets/popular03.png'
import popular04 from '../assets/popular04.png'

const Popular = () => {
  return (
    <div className='mt-16 bg-white flex-column py-20'>
      <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl text-center mb-10">Productos Destacados</h2>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative overflow-hidden h-56 rounded-lg md:h-96">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={popular01} className="absolute block object-contain w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={popular02} className="absolute block object-contain w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={popular03} className="absolute block object-contain w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={popular04} className="absolute block object-contain w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary_ dark:bg-gray-800/30 group-hover:opacity-75 dark:group-hover:opacity-75 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary_ dark:bg-gray-800/30 group-hover:opacity-75 dark:group-hover:opacity-75 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Popular