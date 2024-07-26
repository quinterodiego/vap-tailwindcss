import React from 'react'
import logo_solo_img from '../../assets/logo-solo-img.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Inicio', link: '/', user: true },
  { name: 'Productos', link: '/productos', user: true },
  { name: 'Nosotros', link: '/nosotros', user: true },
  { name: 'Contacto', link: '/nosotros', user: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Footer = () => {
  return (
    <footer className="bg-white mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo_solo_img} className="h-8" alt="Verde Agua Personalizados Logo" />
            <span className="self-center text-md font-semibold whitespace-nowrap text-gray-500">Verde Agua Personalizados</span>
          </Link>
          <span className="block text-md text-gray-500 sm:text-center"> Todos los derechos reservados. © 2024</span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={classNames(
                  item.current
                    ? 'bg-white text-gray-700'
                    : 'text-gray-700 hover:bg-gray-200 hover:text-white',
                  'rounded-md px-3 py-2 text-md font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer