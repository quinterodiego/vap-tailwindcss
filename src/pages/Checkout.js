import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { deleteItemFromCartAsync, selectItems, updateCartAsync } from '../features/cart/cartSlice';
import { useForm } from 'react-hook-form';
import { updateUserAsync } from '../features/auth/authSlice';
import React, { useState } from 'react';
import { createOrderAsync, selectCurrentOrder } from '../features/order/orderSlice';
import { selectUserInfo } from '../features/user/userSlice';

const Checkout = () => {

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const items = useSelector(selectItems)
  const user = useSelector(selectUserInfo)
  const currentOrder = useSelector(selectCurrentOrder)
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('mercadoPago')

  const totalAmount = items.reduce((amount, item) => item.price * item.quantity + amount, 0 )
  const totalItems = items.reduce((total, item) => item.quantity + total, 0 )

  const handleQuantity = (e, item) => {
     dispatch(updateCartAsync({ ...item, quantity: +e.target.value }))
  }

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id))
  }

  const handleAddress = (e) => {
    setSelectedAddress(user.addresses[e.target.value])
  }

  const handlePayment = (e) => {
    setPaymentMethod(e.target.value)
  }

  const handleOrder = (e) => {
    const order = { items, totalAmount, totalItems, user, paymentMethod, selectedAddress, status: 'Pendiente' }
    dispatch(createOrderAsync(order))
  }

  return (
    <>
      {!items.length && <Navigate to={'/'} replace={true} />}
      {currentOrder && <Navigate to={`/order-success/${currentOrder.id}`} replace={true} />}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <div className="log:col-span-3">
            <form className='bg-white px-5 py-12 mt-12' noValidate onSubmit={handleSubmit((data) =>  {
              dispatch(updateUserAsync({ ...user, addresses: [...user.addresses, data] }))
              reset()
            })}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900">Información Personal</h2>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre y Apellido
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('name', { required: 'El nombre es obligatorio' })}
                          id="name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register('email', { required: 'El email es obligatorio' })}
                          type="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Teléfono
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('phone', { required: 'El teléfono es obligatorio' })}
                          id="phone"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="street_address" className="block text-sm font-medium leading-6 text-gray-900">
                        Dirección
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('street_address', { required: 'La dirección es obligatoria' })}
                          id="street_address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3 sm:col-start-1">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        Localidad
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('city', { required: 'La localidad es obligatoria' })}
                          id="city"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="postal_code" className="block text-sm font-medium leading-6 text-gray-900">
                        Código Postal
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register('postal_code', { required: 'El código postal es obligatorio' })}
                          id="postal_code"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                        Provincia
                      </label>
                      <div className="mt-2">
                        <select
                          id="province"
                          {...register('province', { required: 'La provincia es obligatoria' })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Buenos Aires</option>
                          <option>Catamarca</option>
                          <option>Chaco</option>
                          <option>Chubut</option>
                          <option>Córdoba</option>
                          <option>Corrientes</option>
                          <option>Entre Ríos</option>
                          <option>Formosa</option>
                          <option>Jujuy</option>
                          <option>La Pampa</option>
                          <option>La Rioja</option>
                          <option>Mendoza</option>
                          <option>Misiones</option>
                          <option>Neuquén</option>
                          <option>Río Negro</option>
                          <option>Salta</option>
                          <option>San Juan</option>
                          <option>Santa Cruz</option>
                          <option>Santa Fé</option>
                          <option>Santiago del Estero</option>
                          <option>Tierra del Fuego</option>
                          <option>Tucumán</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" className="text-sm font-semibold leading-6 text-primary_ w-32 x-3 py-1 rounded-md border-solid border-2 border-primary hover:opacity-75">
                    Resetear
                  </button>
                  <button
                    type="submit"
                    className="rounded-md px-3 py-2 text-sm font-semibold bg-primary text-white shadow-sm hover:hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Guardar Dirección
                  </button>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Dirección</h2>
                  <p className="mt-0 text-sm pb-2 leading-6 text-gray-600">
                    Seleccioná una dirección existente
                  </p>

                  <ul role="list">
                    {user.addresses && user.addresses.map((address, index) => (
                      <li key={index} className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                        <div className="flex min-w-0 gap-x-4">
                          <input
                            onChange={handleAddress}
                            value={index}
                            name="address"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-[#68c3b7] focus:ring-[#68c3b7]"
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Calle: <span style={{ fontWeight: 'lighter' }}>{address.street_address}</span></p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">Localidad: <span style={{ fontWeight: 'lighter' }}>{address.city}</span></p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">Provincia: <span style={{ fontWeight: 'lighter' }}>{address.province}</span></p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">CP: <span style={{ fontWeight: 'lighter' }}>{address.postal_code}</span></p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">Métodos de Pago</legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">Seleccioná un método</p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="mercadoPago"
                            name="mercadoPago"
                            onChange={handlePayment}
                            value={'mercadoPago'}
                            checked={paymentMethod === 'mercadoPago'}
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-[#68c3b7] focus:ring-[#68c3b7]"
                          />
                          <label htmlFor="mercadoPago" className="block text-sm font-medium leading-6 text-gray-900">
                            Mercado Pago
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="transferencia"
                            name="transferencia"
                            onChange={handlePayment}
                            value={'transferencia'}
                            checked={paymentMethod === 'transferencia'}
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-[#68c3b7] focus:ring-[#68c3b7]"
                          />
                          <label htmlFor="transferencia" className="block text-sm font-medium leading-6 text-gray-900">
                            Transferencia
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="efectivo"
                            name="efectivo"
                            onChange={handlePayment}
                            value={'efectivo'}
                            checked={paymentMethod === 'efectivo'}
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-[#68c3b7] focus:ring-[#68c3b7]"
                          />
                          <label htmlFor="efectivo" className="block text-sm font-medium leading-6 text-gray-900">
                            Efectivo
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
            </div>
          </form>
        </div>
        <div className="log:col-span-2">
            <div className="mx-auto mt-12 bg-white max-w-7xl px-2 sm:px-2 lg:px-4">
              <div className="border-t border-gray-200 px-0 py-6 sm:px-0">
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Carrito</h1>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.href}>{item.title}</a>
                              </h3>
                              <p className="ml-4">${item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900">Cantidad</label>
                              <input className="w-3/12 focus:ring-2 focus:ring-inset focus:ring-primary" type="number" name="quantity" id="quantity" value={item.quantity} onChange={(e) => handleQuantity(e, item)} />
                            </div>
                            <div className="flex">
                              <button
                                onClick={e => handleRemove(e, item.id)}
                                type="button"
                                className="font-medium hover:opacity-75 text-primary_"
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-2 py-6 sm:px-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalAmount}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Productos en el carrito</p>
                  <p className='text-gray-500'>{totalItems} {totalItems > 1 ? ' productos' : 'producto' }</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Envío e impuestos calculados al finalizar la compra.</p>
                <div className="mt-6">
                  <div
                    onClick={handleOrder}
                    className="flex items-center justify-center cursor-pointer rounded-md border border-transparent px-6 py-3 text-base font-medium bg-primary text-white shadow-sm hover:opacity-75"
                  >
                    Terminar Compra
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    ó{' '}
                    <Link to={'/'}>
                      <button
                        type="button"
                        className="font-medium hover:opacity-75 text-primary_"
                      >
                        Continuar Comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout