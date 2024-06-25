import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, updateUserAsync } from '../userSlice';
import { useForm } from 'react-hook-form';

export default function UserProfile() {
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1)
  const [showAddAddressForm, setShowAddAddressForm] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()

  const handleEdit = (addressUpdate, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1, addressUpdate)
    dispatch(updateUserAsync(newUser))
    setSelectedEditIndex(-1)
  }

  const handleRemove = (e, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1)
    dispatch(updateUserAsync(newUser))
  }

  const handleEditForm = (index) => {
    setSelectedEditIndex(index)
    const address = user.addresses[index]
    setValue('name', address.name)
    setValue('email', address.email)
    setValue('phone', address.phone)
    setValue('street_address', address.street_address)
    setValue('city', address.city)
    setValue('postal_code', address.postal_code)
    setValue('province', address.province)
  }

  const handleAdd = (address) => {
    const newUser = { ...user, addresses: [...user.addresses, address] }
    dispatch(updateUserAsync(newUser))
    setShowAddAddressForm(false)
  }

  return (
    <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Nombre: {user.name ? user.name : 'Usuario nuevo'}</h1>
        <h3 className="text-xl my-5 font-semibold tracking-tight text-gray-400">Email: {user.email}</h3>
        {user.role === 'admin' && <h3 className="text-xl my-5 font-semibold tracking-tight text-gray-400">Rol: {user.role}</h3>}
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <button
          onClick={e => { setShowAddAddressForm(true); setSelectedEditIndex(-1) }}
          type="submit"
          className="rounded-md px-3 py-2 text-sm font-semibold bg-primary text-white shadow-sm hover:hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Agregar Nueva Dirección
        </button>

        {
          showAddAddressForm && <form className='bg-white pb-5' noValidate onSubmit={handleSubmit((data) =>  {
              handleAdd(data)
              reset()
            })}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
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
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      onClick={e => setShowAddAddressForm(false)}
                      type="submit"
                      className="rounded-md px-3 py-2 text-sm font-semibold text-gray shadow-sm hover:hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="rounded-md px-3 py-2 text-sm font-semibold bg-primary text-white shadow-sm hover:hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
            </div>
          </form>
        }

        <p className="my-5 text-sm font-semibold text-gray-500">Direcciones de envío:</p>
        {
          !user.addresses.length > 0 && <p className="my-5 text-sm text-gray-500">No existen direcciones cargadas</p>
        }
        {
          user.addresses.map((address, index) => (
            <>
              {
                selectedEditIndex === index ? <form className='bg-white pb-5' noValidate onSubmit={handleSubmit((data) =>  {
                    handleEdit(data, index)
                    reset()
                  })}>
                    <div className="space-y-12">
                      <div className="border-b border-gray-900/10 pb-12">
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
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                          <button
                            onClick={e => setSelectedEditIndex(-1)}
                            type="submit"
                            className="rounded-md px-3 py-2 text-sm font-semibold text-gray shadow-sm hover:hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            className="rounded-md px-3 py-2 text-sm font-semibold bg-primary text-white shadow-sm hover:hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Guardar
                          </button>
                        </div>
                      </div>    
                  </div>
                </form> : null
              }
              <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">Calle: <span style={{ fontWeight: 'lighter' }}>{address.street_address}</span></p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">Localidad: <span style={{ fontWeight: 'lighter' }}>{address.city}</span></p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">Provincia: <span style={{ fontWeight: 'lighter' }}>{address.province}</span></p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">CP: <span style={{ fontWeight: 'lighter' }}>{address.postal_code}</span></p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-around justify-around">
                    <button
                      onClick={e => handleEditForm(index)}
                      type="button"
                      className="font-medium hover:opacity-75 text-primary"
                    >
                      Editar
                    </button>
                    <button
                      onClick={e => handleRemove(e, index)}
                      type="button"
                      className="font-medium hover:opacity-75 text-red-900"
                    >
                      Eliminar
                    </button>
                  </div>
              </div>
            </>
          ))
        }
      </div>
    </div>
  );
}
