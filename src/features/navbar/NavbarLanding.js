import React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import logo_solo_img from '../../assets/logo-solo-img.png'
import instagram from '../../assets/instagram.png'
import { useEffect } from 'react'
import { scroller } from 'react-scroll';

const navigation = [
  { name: 'Inicio', link: '/', user: true },
  { name: 'Productos', link: '/productos', user: true },
  { name: 'Nosotros', link: '/#about', user: true },
  { name: 'Contacto', link: '/#contact', user: true },
]
const userNavigation = [
  { name: 'Datos Personales', link: '/profile' },
  { name: 'Mis Pedidos', link: '/orders' },
  { name: 'Salir', link: '/logout' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

export const NavbarLanding = ({children}) => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      scroller.scrollTo(sectionId, {
        duration: 300,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [location]);

  return (
    <div className=''>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white sticky top-0 z-50 drop-shadow-md">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex w-full h-16 items-center justify-between">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <Link to={'/'} onClick={scrollToTop}>
                        <img
                          className="h-10 w-10"
                          src={logo_solo_img}
                          alt="Your Company"
                        />
                      </Link>
                      <h1 className="md:text-3xl font-bold tracking-tight text-primary_">Verde Agua Personalizados</h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-center space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            onClick={item.name === 'Inicio' && scrollToTop()}
                            className={classNames(
                              item.current
                                ? 'bg-white text-gray-700'
                                : 'text-gray-700 hover:bg-gray-200 hover:text-white',
                              'rounded-md px-3 py-2 text-lg font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <a href="https://www.instagram.com/verde_agua.personalizados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='rounded-md px-3 py-2 hover:bg-gray-200' target='_blank' rel="noreferrer">
                          <img src={instagram} className='w-6 h-6' alt="instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="https://www.instagram.com/verde_agua.personalizados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='md:hidden block rounded-md mr-3 py-2 hover:bg-gray-200' target='_blank' rel="noreferrer">
                          <img src={instagram} className='w-6 h-5' alt="instagram" />
                        </a>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                     <Link
                      key={item.name}
                      to={item.link}
                      onClick={item.name === 'Inicio' && scrollToTop()}
                      className={classNames(
                        item.current ? 'bg-gray-100 text-white' : 'text-gray-700 hover:bg-gray-200 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pb-3 pt-4">
                  <div className="flex items-center px-5">
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-primary shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">Verde Agua Personalizados</h1>
          </div>
        </header> */}
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
