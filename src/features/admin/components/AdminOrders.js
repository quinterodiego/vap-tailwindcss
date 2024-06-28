import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllOrdersAsync, selectOrders, selectTotalOrders, updateOrderAsync } from '../../order/orderSlice'
import { ITEMS_PER_PAGE } from '../../../app/constants'
import { XMarkIcon, EyeIcon, PencilIcon } from '@heroicons/react/24/outline'


const AdminOrders = () => {
  const [page, setPage] = useState(1)
  const [editableOrderId, setEditableOrderId] = useState(-1)
  const dispatch = useDispatch()
  const orders = useSelector(selectOrders)
  const totalOrders = useSelector(selectTotalOrders)

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE }
    dispatch(fetchAllOrdersAsync(pagination))
  }, [dispatch, page])
  
  const handleShow = (oder) => {
  }

  const handleEdit = (order) => {
    setEditableOrderId(order.id)
  }

  const handleUpdate = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value }
    dispatch(updateOrderAsync(updatedOrder))
  }

  return (
    <>
      {/* component */}
      <div className="overflow-x-auto">
        <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Pedido #</th>
                    <th className="py-3 px-6 text-left">Productos</th>
                    <th className="py-3 px-6 text-center">Importe Total</th>
                    <th className="py-3 px-6 text-center">Dir. Envío</th>
                    <th className="py-3 px-6 text-center">Estado</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {
                    orders.map(order => (
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2">

                            </div>
                            <span className="font-medium">{order.id}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                        {
                          order.items.map(item => <div className="flex items-center justify-center">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={item.thumbnail}
                                />
                              </div>
                              <span>{`${item.title} - (x ${item.quantity}) - $${item.price}`}</span>
                            </div>
                          </div>
                        )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            ${order.totalAmount}
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            {order.selectedAddress.name}
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                            {order.status}
                          </span>
                          <select onChange={e => handleUpdate(e, order)}>
                            <option value="pending">Pendiente</option>
                            <option value="dispatched">Despachado</option>
                            <option value="delivered">Enviado</option>
                            <option value="canceled">Cancelado</option>
                          </select>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-6 mr-2 transform hover:text-primary hover:scale-110 cursor-pointer">
                              <EyeIcon className='w-6 h-6' onClick={e => handleShow(order)} />
                            </div>
                            <div className="w-4 mr-2 transform hover:text-primary hover:scale-110 cursor-pointer">
                              <PencilIcon className='w-6 h-6' onClick={e => handleEdit(order)} />
                            </div>
                            <div className="w-4 mr-2 transform hover:text-primary hover:scale-110 cursor-pointer">
                              
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminOrders