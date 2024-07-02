import React from 'react';
import { useForm } from "react-hook-form"
import { Link, Navigate } from 'react-router-dom'
import { checkUserAsync, selectError, selectLoggedInUser } from '../authSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../assets/logo-horizontal.png'

export default function ForgotPassword() {

  const error = useSelector(selectError)
  const user = useSelector(selectLoggedInUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresar email para blanquear su contraseña
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-6" onSubmit={handleSubmit((data) => console.log(data))}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {
                    ...register("email", { 
                      required: "El email es obligatorio",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: 'Email no válido'
                      }
                    })
                  }
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Blanquear contraseña
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Volver a {' '}
            <Link to={'/login'} className="font-semibold leading-6 text-primary hover:opacity-75">
              Ingresar
            </Link>
          </p>
        </div>
      </div>
   </>
  );
}