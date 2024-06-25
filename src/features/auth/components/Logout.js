import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser, singOutAsync } from '../authSlice'
import { Navigate } from 'react-router-dom'

const Logout = () => {

  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(() => {
    dispatch(singOutAsync())
  }, [dispatch])
  

  return (
    <>
      { user && <Navigate to={'/login'} replace={true} /> }
    </>
  )
}

export default Logout