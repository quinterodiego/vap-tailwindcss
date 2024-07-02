import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllOrdersAsync, selectOrders, selectTotalOrders, updateOrderAsync } from '../../order/orderSlice'
import { ITEMS_PER_PAGE } from '../../../app/constants'
import { XMarkIcon, EyeIcon, PencilIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import { Pagination } from '../../common/Pagination'

const AdminOrders = () => {
  const [page, setPage] = useState(1)
  const [editableOrderId, setEditableOrderId] = useState(-1)
  const [sort, setSort] = useState({})
  const dispatch = useDispatch()
  const orders = useSelector(selectOrders)
  const totalOrders = useSelector(selectTotalOrders)
  console.log(totalOrders)
  
  const handleShow = (oder) => {
  }

  const handleEdit = (order) => {
    setEditableOrderId(order.id)
  }

  const handleUpdate = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value }
    dispatch(updateOrderAsync(updatedOrder))
    setEditableOrderId(-1)
  }

  const chooseColor = (status) => {
    switch (status) {
      case 'Pendiente':
        return 'bg-gray-400 text-white'
      case 'Despachado':
        return 'bg-blue-400 text-white'
      case 'Entregado':
        return 'bg-emerald-500 text-white'
      case 'Cancelado':
        return 'bg-red-400 text-white'
      default:
        return 'bg-gray-400 text-white'
    }
  }

  const handlePage = (page) => {
    setPage(page)
  }

  const handleSort = (sortOption) => {
    const sorting = { _sort: sortOption.sort, _order: sortOption.order }
    setSort(sorting)
    console.log(sort)
  }

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE }
    dispatch(fetchAllOrdersAsync({ sort, pagination }))
  }, [dispatch, page, sort])

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
                    <th className="py-3 px-6 text-left cursor-pointer flex items-center" onClick={e => handleSort({ sort: 'id', order: sort?._order==='asc'?'desc':'asc' })} >Pedido # {
                      sort._sort === 'id' && (
                        sort._order === 'asc' ? (
                          <ArrowUpIcon className='w-3 h-3 inline ml-1'/>
                        ) : <ArrowDownIcon className='w-3 h-3 inline ml-1'/>
                      )
                      }</th>
                    <th className="py-3 px-6 text-left">Productos</th>
                    <th className="py-3 px-6 text-left cursor-pointer flex items-center" onClick={e => handleSort({ sort: 'totalAmount', order: sort?._order==='asc'?'desc':'asc' })} >Importe Total {
                      sort._sort === 'totalAmount' && (
                        sort._order === 'asc' ? (
                          <ArrowUpIcon className='w-3 h-3 inline ml-1'/>
                        ) : <ArrowDownIcon className='w-3 h-3 inline ml-1'/>
                      )
                      }</th>
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
                          {
                            order.id === editableOrderId ? 
                              <select onChange={e => handleUpdate(e, order)}>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Despachado">Despachado</option>
                                <option value="Entregado">Entregado</option>
                                <option value="Cancelado">Cancelado</option>
                              </select>
                              :
                              <span className={`${chooseColor(order.status)} py-2 px-4 rounded-full text-xs`}>
                                {order.status}
                              </span>
                          }
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
        <Pagination page={page} setPage={setPage} handlePage={handlePage} totalItems={totalOrders} />
      </div>
    </>
  )
}

export default AdminOrders