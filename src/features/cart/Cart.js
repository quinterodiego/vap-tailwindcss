import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { deleteItemFromCartAsync, selectItems, updateCartAsync } from './cartSlice';

export default function Cart() {

  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const totalAmount = items.reduce((amount, item) => item.price * item.quantity + amount, 0 )
  const totalItems = items.reduce((total, item) => item.quantity + total, 0 )

  const handleQuantity = (e, item) => {
     dispatch(updateCartAsync({ ...item, quantity: +e.target.value }))
  }

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id))
  }

  return (
    <>
      {!items.length && <Navigate to={'/'} replace={true} />}
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
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

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
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
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium bg-primary text-white shadow-sm hover:opacity-75"
            >
              Terminar Compra
            </Link>
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
    </>
  );
}