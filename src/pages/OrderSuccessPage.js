import React, { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { resetCartAsync } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../features/auth/authSlice'
import { resetOrder } from '../features/order/orderSlice'

const OrderSuccessPage = ({ order }) => {

  const params = useParams()
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(() => {
    dispatch(resetCartAsync(user.id))
    dispatch(resetOrder())
  }, [dispatch, user])
  

  return (
    <>
    {!params && <Navigate to={'/'} replace={true} />}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary_">Pedido realizado con éxito</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Número de pedido: #{params?.id}</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Podés chequear tu pedido en Mi Cuenta {'>'} Mis pedidos</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={'/'}
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ir a la página principal
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default OrderSuccessPage