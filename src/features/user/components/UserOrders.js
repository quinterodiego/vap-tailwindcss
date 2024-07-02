import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUserOrdersAsync, selectUserInfo, selectUserOrders } from '../userSlice';

export default function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrders)

  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user.id))
  }, [dispatch, user])

  return (
    <div>
      {
        orders.map((order) => (
          <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Pedido: #{order.id}</h1>
              <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">Estado: {order.status}</h3>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order.items.map((item) => (
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
                            <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900">Cantidad {item.quantity}</label>
                          </div>
                          <div className="flex">
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
                <p>${order.totalAmount}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Productos en el carrito</p>
                <p className='text-gray-500'>{order.totalItems} {order.totalItems > 1 ? ' productos' : 'producto' }</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Dirección de envío:</p>
              <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">Calle: <span style={{ fontWeight: 'lighter' }}>{order.selectedAddress.street_address}</span></p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">Localidad: <span style={{ fontWeight: 'lighter' }}>{order.selectedAddress.city}</span></p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">Provincia: <span style={{ fontWeight: 'lighter' }}>{order.selectedAddress.province}</span></p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">CP: <span style={{ fontWeight: 'lighter' }}>{order.selectedAddress.postal_code}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}