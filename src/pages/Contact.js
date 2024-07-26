import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Audio } from 'react-loader-spinner'

export default function Contact() {

  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault()
    setEnviando(true)
    setEnviado(false)
    emailjs.sendForm('service_9p670zt', 'template_thsjvim', e.target, {
      publicKey: '_sUa67oDgUDPTNbbk',
    })
    .then(
      () => {
        console.log('SUCCESS!')
        setEnviando(false)
        setEnviado(true)
      },
      (error) => {
        console.log('FAILED...', error.text)
      },
    )
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id='contact'>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dejanos tu mensaje</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Recibirás una respuesta a la brevedad. 
        </p>
      </div>
      { enviando ?
        <div className='flex justify-center items-center pt-5'>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#68c3b7"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
        :
        enviado ?
        <div className='flex flex-column justify-center items-center pt-5 gap-3'>
          <p className='text-xl'>Gracias por tu mensaje!</p>
          <button
              type="button"
              onClick={() => setEnviado(false)}
              className="block rounded-md bg-primary_ px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Nuevo mensaje
            </button>
        </div>
        :
        <form onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="user_name" className="block text-sm font-semibold leading-6 text-gray-900">
                Nombre completo
              </label>
              <div className="mt-2.5">
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Mensaje
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-primary_ px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
          </div>
        </form>
      }
    </div>
  )
}